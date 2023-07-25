import { inject, injectable } from 'inversify'

import { TYPES } from '../../../types'

import type { Topic } from './TopicModel'
import type { TopicCreateOrEditDto } from './dto'
import type {
  ITopicRepository,
  ITopicService,
  TCursorPagination,
  TModelTopic,
} from './types'

@injectable()
export class TopicService implements ITopicService {
  constructor(
    @inject(TYPES.TopicRepository) private topicRepository: ITopicRepository,
  ) {}

  all(cursor: number): TCursorPagination<Topic> {
    return this.topicRepository.all(cursor)
  }

  create(dto: TopicCreateOrEditDto, userId: number): TModelTopic {
    return this.topicRepository.create(dto, userId)
  }

  read(id: number): Promise<Topic | false> {
    return this.topicRepository.read(id)
  }

  update(id: number, dto: TopicCreateOrEditDto): Promise<Topic | false> {
    return this.topicRepository.update(id, dto)
  }

  delete(id: number): Promise<boolean> {
    return this.topicRepository.delete(id)
  }
}
