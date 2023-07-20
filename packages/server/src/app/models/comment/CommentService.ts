import { inject, injectable } from 'inversify'

import { TYPES } from '../../../types'

import type { Comment } from './CommentModel'
import type { CommentCreateDto } from './dto'
import type { ICommentRepository, ICommentService } from './types'
import type { ITopicRepository } from '../topic'

@injectable()
export class CommentService implements ICommentService {
  constructor(
    @inject(TYPES.CommentRepository)
    private commentRepository: ICommentRepository,
    @inject(TYPES.TopicRepository)
    private topicRepository: ITopicRepository,
  ) {}

  async create(
    data: CommentCreateDto,
    userId: number,
  ): Promise<Comment | false> {
    const { topicId, parentId } = data
    const topic = await this.topicRepository.read(topicId)
    if (!topic) {
      return false
    }

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
}
