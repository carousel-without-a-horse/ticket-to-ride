import { inject, injectable } from 'inversify'

import { BaseController } from '../../common/BaseController'
import { TYPES } from '../../../types'
import { ValidateMiddleware } from '../../common/ValidateMiddleware'
import { HTTPError } from '../../errors'

import { LikeService } from './LikeService'
import { LikeDto, LikeGetDto } from './dto'

import type { ILoggerService } from '../../services/loggerService'
import type { NextFunction, Request, Response } from 'express'
import type { TLikeController } from './types'

@injectable()
export class LikeController extends BaseController implements TLikeController {
  constructor(
    @inject(TYPES.Logger) private loggerService: ILoggerService,
    @inject(TYPES.LikeService) private likeService: LikeService,
  ) {
    super(loggerService)
    this.bindRoutes([
      {
        path: '/:type/:id',
        method: 'get',
        func: this.getAll,
        middlewares: [
          new ValidateMiddleware(LikeGetDto, { isParamValidate: true }),
        ],
      },
      {
        path: '/toggleLike',
        method: 'put',
        func: this.toggleLike,
        middlewares: [new ValidateMiddleware(LikeDto)],
      },
      {
        path: '/toggleDislike',
        method: 'put',
        func: this.toggleDislike,
        middlewares: [new ValidateMiddleware(LikeDto)],
      },
    ])
  }

  override getAll = async (
    { params: { id, type } }: Request<LikeGetDto, TObject, TObject>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      if (!type || !id) {
        return next(
          new HTTPError(
            422,
            'Не указан тип или идентификатор',
            'LikeController',
          ),
        )
      }
      this.loggerService.info(
        `[LikeController] get likes for ${type} with ${id}`,
      )
      const data = await this.likeService.getAll({ type, id: +id })

      this.ok(res, data)
    } catch (e) {
      return next(e)
    }
  }

  toggleLike = async (
    { user, body: { id, type } }: Request<TObject, TObject, LikeDto>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      this.loggerService.info(
        `[LikeController] toggleLike for ${type} with ${id}`,
      )
      const data = await this.likeService.toggleLike({
        type,
        id,
        userId: user.id,
      })

      this.ok(res, data)
    } catch (e) {
      return next(e)
    }
  }

  toggleDislike = async (
    { user, body: { id, type } }: Request<TObject, TObject, LikeDto>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      this.loggerService.info(
        `[LikeController] toggleDislike for ${type} with ${id}`,
      )
      const data = await this.likeService.toggleDislike({
        type,
        id,
        userId: user.id,
      })

      this.ok(res, data)
    } catch (e) {
      return next(e)
    }
  }
}
