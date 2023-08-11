import { inject, injectable } from 'inversify'

import { TYPES } from '../../../types'

import type { Topic } from './TopicModel'
import type { TopicCreateOrEditDto } from './dto'
import type { TCursorPagination, TModelTopic } from './types'
import type { TopicRepository } from './TopicRepository'

@injectable()
export class TopicService {
  constructor(
    @inject(TYPES.TopicRepository) private topicRepository: TopicRepository,
  ) {}

  all(cursor: number, userId?: number): TCursorPagination<Topic> {
    return this.topicRepository.all(cursor, userId)
  }

  create(dto: TopicCreateOrEditDto, userId: number): TModelTopic {
    return this.topicRepository.create(dto, userId)
  }

  read(id: number): Promise<Topic | false> {
    return this.topicRepository.read(id)
  }

  update(
    id: number,
    dto: TopicCreateOrEditDto,
    currentUserId: number,
  ): Promise<Topic | false> {
    return this.topicRepository.update(id, dto, currentUserId)
  }

  delete(id: number, currentUserId: number): Promise<boolean> {
    return this.topicRepository.delete(id, currentUserId)
  }
}
