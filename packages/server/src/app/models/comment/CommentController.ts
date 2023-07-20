import { inject, injectable } from 'inversify'

import { BaseController } from '../../common/BaseController'
import { ValidateMiddleware } from '../../common/ValidateMiddleware'
import { HTTPError } from '../../errors'
import { TYPES } from '../../../types'

import { CommentCreateDto } from './dto'

import type { NextFunction, Request, Response } from 'express'
import type { ILoggerService } from '../../services/loggerService'
import type { TCommentController, ICommentService, TObject } from './types'

@injectable()
export class CommentController
  extends BaseController
  implements TCommentController
{
  constructor(
    @inject(TYPES.Logger) private loggerService: ILoggerService,
    @inject(TYPES.CommentService) private commentService: ICommentService,
  ) {
    super(loggerService)
    this.bindRoutes([
      {
        path: '/',
        method: 'post',
        // eslint-disable-next-line @typescript-eslint/unbound-method,@typescript-eslint/no-misused-promises
        func: this.create,
        middlewares: [new ValidateMiddleware(CommentCreateDto)],
      },
      {
        path: '/:id',
        method: 'delete',
        // eslint-disable-next-line @typescript-eslint/unbound-method,@typescript-eslint/no-misused-promises
        func: this.delete,
      },
    ])
  }

  override create = async (
    { body, user }: Request<TObject, TObject, CommentCreateDto>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    this.loggerService.info(
      `[CommentController] create comment with content: ${body.content}`,
    )
    const result = await this.commentService.create(body, user.id)
    if (!result) {
      return next(
        new HTTPError(422, 'Комментарий не создан', 'CommentController'),
      )
    }
    this.ok(res, result)
  }

  override delete = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const result = await this.commentService.delete(+req.params.id)
    if (!result) {
      return next(
        new HTTPError(422, 'Комментарий не найден', 'CommentController'),
      )
    }
    this.ok(res, result)
  }
}
