import type { BaseController } from '../../common/BaseController'
import type { IRestApiController } from '../../common/types'

export type TCommentController = BaseController &
  Required<Pick<IRestApiController, 'create' | 'delete'>>
