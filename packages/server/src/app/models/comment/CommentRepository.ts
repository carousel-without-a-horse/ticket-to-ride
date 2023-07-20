import { inject, injectable } from 'inversify'

import { DBService } from '../../../database/DBService'
import { TYPES } from '../../../types'

import { Comment } from './CommentModel'

import type { ICommentRepository } from './types'
import type { Repository } from 'sequelize-typescript'

@injectable()
export class CommentRepository implements ICommentRepository {
  commentRepository: Repository<Comment>
  constructor(@inject(TYPES.DBService) dbService: DBService) {
    this.commentRepository = dbService.client.getRepository(Comment)
  }

  create(
    data: { content: string; parentId?: number },
    userId: number,
  ): Promise<Comment> {
    return this.commentRepository.create({ ...data, userId })
  }

  async read(id: number): Promise<Comment | false> {
    const comment = await this.commentRepository.findByPk(id)
    return comment || false
  }

  async delete(id: number): Promise<boolean> {
    const comment = await this.commentRepository.findByPk(id)
    if (!comment) {
      return false
    }

    void comment.destroy()
    return true
  }
}
