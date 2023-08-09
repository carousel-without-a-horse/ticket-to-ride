import { inject, injectable } from 'inversify'

import { BaseController } from '../../common/BaseController'
import { ValidateMiddleware } from '../../common/ValidateMiddleware'
import { TYPES } from '../../../types'
import { UserService } from '../user'

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
    @inject(TYPES.UserService) private userService: UserService,
  ) {
    super(loggerService)
    this.bindRoutes([
      {
        path: '/',
        method: 'get',
        func: this.getAll,
        middlewares: [
          new ValidateMiddleware(TopicGetAllDto, { isBodyValidate: false }),
        ],
      },
      {
        path: '/:id',
        method: 'get',
        func: this.read,
      },
      {
        path: '/',
        method: 'post',
        func: this.create,
        middlewares: [new ValidateMiddleware(TopicCreateOrEditDto)],
      },
      {
        path: '/:id',
        method: 'put',
        func: this.update,
        middlewares: [new ValidateMiddleware(TopicCreateOrEditDto)],
      },
      {
        path: '/:id',
        method: 'delete',
        func: this.delete,
      },
    ])
  }

  override getAll = async (
    req: Request<TObject, TObject, TObject, TopicGetAllDto>,
    res: Response,
  ): Promise<void> => {
    const cursor = req.query.cursor ? parseInt(req.query.cursor.toString()) : 0
    const userId =
      req.query.isMy && req.query.isMy === 'true' ? req.user.id : undefined
    this.loggerService.info(
      `[TopicController] get topics with cursor: ${cursor}`,
    )
    const data = await this.topicService.all(cursor, userId)

    this.ok(res, data)
  }

  override create = async (
    { body, user }: Request<TObject, TObject, TopicCreateOrEditDto>,
    res: Response,
  ): Promise<void> => {
    this.loggerService.info(
      `[TopicController] create topic with title: ${body.title}`,
    )
    const userData = await this.userService.upsert(user)
    const result = await this.topicService.create(body, userData.id)
    this.ok(res, result)
  }

  override read = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const result = await this.topicService.read(+req.params.id)
      this.ok(res, result)
    } catch (e) {
      return next(e)
    }
  }

  override delete = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const result = await this.topicService.delete(+req.params.id, req.user.id)
      this.ok(res, result)
    } catch (e) {
      return next(e)
    }
  }

  override update = async (
    {
      params,
      body,
      user,
    }: Request<{ id?: string }, TObject, TopicCreateOrEditDto>,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const result = await this.topicService.update(+params.id!, body, user.id)
      this.ok(res, result)
    } catch (e) {
      return next(e)
    }
  }
}
