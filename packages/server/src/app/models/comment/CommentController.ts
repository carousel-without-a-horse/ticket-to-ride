import { inject, injectable } from 'inversify'

import { BaseController } from '../../common/BaseController'
import { ValidateMiddleware } from '../../common/ValidateMiddleware'
import { HTTPError } from '../../errors'
import { TYPES } from '../../../types'

import { CommentCreateDto } from './dto'

import type { NextFunction, Request, Response } from 'express'
import type { ILoggerService } from '../../services/loggerService'
import type { TCommentController } from './types'
import type { CommentService } from './CommentService'

@injectable()
export class CommentController
  extends BaseController
  implements TCommentController
{
  constructor(
    @inject(TYPES.Logger) private loggerService: ILoggerService,
    @inject(TYPES.CommentService) private commentService: CommentService,
  ) {
    super(loggerService)
    this.bindRoutes([
      {
        path: '/',
        method: 'post',
        func: this.create,
        middlewares: [new ValidateMiddleware(CommentCreateDto)],
      },
      {
        path: '/:id',
        method: 'delete',
        func: this.delete,
      },
      {
        path: '/:topicId',
        method: 'get',
        func: this.getAllByTopicId,
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

  getAllByTopicId = async (req: Request, res: Response): Promise<void> => {
    const topicId = +req.params.topicId
    const result = await this.commentService.getAllByTopicId(topicId)
    this.ok(res, result)
  }
}
