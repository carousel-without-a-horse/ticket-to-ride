import type { Topic } from './TopicModel'
import type { IRestApiController } from '../../common/types'
import type { BaseController } from '../../common/BaseController'

export type TModelTopic = Promise<Topic>
export type TCursorPagination<T> = Promise<{
  data: T[]
  nextId: number | null
}>

export type TTopicController = BaseController & Required<IRestApiController>
