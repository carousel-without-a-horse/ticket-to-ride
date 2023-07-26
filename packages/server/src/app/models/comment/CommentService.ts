import { inject, injectable } from 'inversify'

import { TYPES } from '../../../types'

import type { Comment } from './CommentModel'
import type { CommentCreateDto } from './dto'
import type { CommentRepository } from './CommentRepository'

@injectable()
export class CommentService {
  constructor(
    @inject(TYPES.CommentRepository)
    private commentRepository: CommentRepository,
  ) {}

  async create(
    data: CommentCreateDto,
    userId: number,
  ): Promise<Comment | false> {
    const { parentId } = data

    if (parentId) {
      const parentComment = await this.commentRepository.read(parentId)
      if (!parentComment) {
        return false
      }
    }
    return this.commentRepository.create(data, userId)
  }

  read(id: number): Promise<Comment | false> {
    return this.commentRepository.read(id)
  }

  delete(id: number): Promise<boolean> {
    return this.commentRepository.delete(id)
  }

  getAllByTopicId(topicId: number): Promise<Comment[]> {
    return this.commentRepository.getAllByTopicId(topicId)
  }
}
