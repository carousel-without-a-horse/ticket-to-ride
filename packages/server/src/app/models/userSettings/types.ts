import type { BaseController } from '../../common/BaseController'
import type { IRestApiController } from '../../common/types'

export type TUserSettingsController = BaseController &
  Required<Pick<IRestApiController, 'read' | 'update'>>
