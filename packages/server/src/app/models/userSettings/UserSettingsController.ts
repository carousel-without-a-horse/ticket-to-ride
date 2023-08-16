import { inject } from 'inversify'

import { BaseController } from '../../common/BaseController'
import { TYPES } from '../../../types'
import { ValidateMiddleware } from '../../common/ValidateMiddleware'

import { UserSettingsService } from './UserSettingsService'
import { UserSettingsUpdateDto } from './dto'

import type { NextFunction, Request, Response } from 'express'
import type { ILoggerService } from '../../services/loggerService'
import type { TUserSettingsController } from './types'

export class UserSettingsController
  extends BaseController
  implements TUserSettingsController
{
  constructor(
    @inject(TYPES.Logger) private loggerService: ILoggerService,
    @inject(TYPES.UserSettingsService)
    private userSettingsService: UserSettingsService,
  ) {
    super(loggerService)
    this.bindRoutes([
      {
        path: '/',
        method: 'get',
        func: this.read,
      },
      {
        path: '/',
        method: 'put',
        func: this.update,
        middlewares: [new ValidateMiddleware(UserSettingsUpdateDto)],
      },
    ])
  }

  override read = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      this.loggerService.info(
        `[UserSettingsController] read settings for user: ${req.user.id}`,
      )
      const result = await this.userSettingsService.findOrCreate(req.user.id)
      this.ok(res, result)
    } catch (e) {
      return next(e)
    }
  }

  override update = async (
    { body, user }: Request<TObject, TObject, UserSettingsUpdateDto>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      this.loggerService.info(
        `[UserSettingsController] update settings for user: ${user.id}`,
      )
      const result = await this.userSettingsService.update(user.id, body)
      this.ok(res, result)
    } catch (e) {
      return next(e)
    }
  }
}
