import { inject, injectable } from 'inversify'
import { Op } from 'sequelize'

import { DBService } from '../../../database/DBService'
import { TYPES } from '../../../types'

import { Comment } from './CommentModel'

import type { Repository } from 'sequelize-typescript'

@injectable()
export class CommentRepository {
  commentRepository: Repository<Comment>
  constructor(@inject(TYPES.DBService) dbService: DBService) {
    this.commentRepository = dbService.client.getRepository(Comment)
  }

  async create(
    data: { content: string; parentId?: number },
    userId: number,
  ): Promise<Comment | false> {
    try {
      return await this.commentRepository.create({ ...data, userId })
    } catch (_e) {
      return false
    }
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

  getAllByTopicId(topicId: number): Promise<Comment[]> {
    return this.commentRepository.findAll({
      order: [['createdAt', 'ASC']],
      where: {
        topicId: {
          [Op.eq]: topicId,
        },
      },
    })
  }
}
