import { inject, injectable } from 'inversify'

import { BaseController } from '../../common/BaseController'
import { ValidateMiddleware } from '../../common/ValidateMiddleware'
import { HTTPError } from '../../errors'
import { TYPES } from '../../../types'

import { TopicGetAllDto, TopicCreateOrEditDto } from './dto'

import type { NextFunction, Request, Response } from 'express'
import type { ILoggerService } from '../../services/loggerService'
import type { TTopicController } from './types'
import type { TopicService } from './TopicService'

@injectable()
export class TopicController
  extends BaseController
  implements TTopicController
{
  constructor(
    @inject(TYPES.Logger) private loggerService: ILoggerService,
    @inject(TYPES.TopicService) private topicService: TopicService,
  ) {
    super(loggerService)
    this.bindRoutes([
      {
        path: '/',
        method: 'get',
        // eslint-disable-next-line @typescript-eslint/unbound-method,@typescript-eslint/no-misused-promises
        func: this.getAll,
        middlewares: [
          new ValidateMiddleware(TopicGetAllDto, { isBodyValidate: false }),
        ],
      },
      {
        path: '/:id',
        method: 'get',
        // eslint-disable-next-line @typescript-eslint/unbound-method,@typescript-eslint/no-misused-promises
        func: this.read,
      },
      {
        path: '/',
        method: 'post',
        // eslint-disable-next-line @typescript-eslint/unbound-method,@typescript-eslint/no-misused-promises
        func: this.create,
        middlewares: [new ValidateMiddleware(TopicCreateOrEditDto)],
      },
      {
        path: '/:id',
        method: 'put',
        // eslint-disable-next-line @typescript-eslint/unbound-method,@typescript-eslint/no-misused-promises
        func: this.update,
        middlewares: [new ValidateMiddleware(TopicCreateOrEditDto)],
      },
      {
        path: '/:id',
        method: 'delete',
        // eslint-disable-next-line @typescript-eslint/unbound-method,@typescript-eslint/no-misused-promises
        func: this.delete,
      },
    ])
  }

  override getAll = async (
    req: Request<TObject, TObject, TObject, TopicGetAllDto>,
    res: Response,
  ): Promise<void> => {
    const cursor = req.query.cursor ? parseInt(req.query.cursor.toString()) : 0
    this.loggerService.info(
      `[TopicController] get topics with cursor: ${cursor}`,
    )
    const data = await this.topicService.all(cursor)

    this.ok(res, data)
  }

  override create = async (
    { body, user }: Request<TObject, TObject, TopicCreateOrEditDto>,
    res: Response,
  ): Promise<void> => {
    this.loggerService.info(
      `[TopicController] create topic with title: ${body.title}`,
    )
    const result = await this.topicService.create(body, user.id)
    this.ok(res, result)
  }

  override read = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const result = await this.topicService.read(+req.params.id)
    if (!result) {
      return next(new HTTPError(422, 'Топик не найден', 'TopicController'))
    }
    this.ok(res, result)
  }

  override delete = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const result = await this.topicService.delete(+req.params.id)
    if (!result) {
      return next(new HTTPError(422, 'Топик не найден', 'TopicController'))
    }
    this.ok(res, result)
  }

  override update = async (
    { params, body }: Request<{ id?: string }, TObject, TopicCreateOrEditDto>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const result = await this.topicService.update(+params.id!, body)
    if (!result) {
      return next(new HTTPError(422, 'Топик не найден', 'TopicController'))
    }
    this.ok(res, result)
  }
}
