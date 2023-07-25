import type { TopicCreateOrEditDto } from './dto'
import type { Topic } from './TopicModel'
import type { IRestApiController } from '../../common/types'
import type { BaseController } from '../../common/BaseController'

export type TModelTopic = Promise<Topic>
export type TCursorPagination<T> = Promise<{
  data: T[]
  nextId: number | null
}>

export type TTopicController = BaseController & Required<IRestApiController>

export interface ITopicService {
  all: (cursor: number) => TCursorPagination<Topic>
  create: (dto: TopicCreateOrEditDto, userId: number) => Promise<Topic>
  read: (id: number) => Promise<Topic | false>
  update: (id: number, topic: TopicCreateOrEditDto) => Promise<Topic | false>
  delete: (id: number) => Promise<boolean>
}

export interface ITopicRepository {
  all: (cursor: number) => TCursorPagination<Topic>
  create: (topic: TopicCreateOrEditDto, userId: number) => Promise<Topic>
  read: (id: number) => Promise<Topic | false>
  update: (id: number, topic: TopicCreateOrEditDto) => Promise<Topic | false>
  delete: (id: number) => Promise<boolean>
}

export type TObject = Record<string, unknown>
