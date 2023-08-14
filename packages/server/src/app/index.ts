import { inject, injectable } from 'inversify'
import express, { json } from 'express'
import cors from 'cors'
import { createProxyMiddleware } from 'http-proxy-middleware'
import cookieParser from 'cookie-parser'

import { DBService } from '../database/DBService'
import { TYPES } from '../types'

import { server } from './services/serverService'
import { AuthMiddleware, AuthGuardMiddleware } from './middlewares'
import { UserSettingsService } from './models/userSettings'

import type { Express } from 'express'
import type { Server } from 'http'
import type { ILoggerService } from './services/loggerService'
import type { IConfigService } from './services/configService'
import type { IExceptionFilter } from './errors/types'
import type { TTopicController } from './models/topic'
import type { TCommentController } from './models/comment'
import type { TUserSettingsController } from './models/userSettings'

@injectable()
export class App {
  app: Express
  server: Server | undefined

  port: number

  constructor(
    @inject(TYPES.Logger) private logger: ILoggerService,
    @inject(TYPES.ConfigService) private config: IConfigService,
    @inject(TYPES.TopicController) private topicController: TTopicController,
    @inject(TYPES.CommentController)
    private commentController: TCommentController,
    @inject(TYPES.UserSettingsController)
    private userSettingsController: TUserSettingsController,
    @inject(TYPES.DBService) private dbService: DBService,
    @inject(TYPES.ExceptionFilter) private exceptionFilter: IExceptionFilter,
    @inject(TYPES.UserSettingsService)
    private userSettingsService: UserSettingsService,
  ) {
    this.app = express()
    const port = this.config.get('SERVER_PORT')
    this.port = port ? Number(port) : 3000
  }

  private useMiddleware(): void {
    this.app.use(cors())
    this.app.use(
      '/api/v2',
      createProxyMiddleware({
        changeOrigin: true,
        cookieDomainRewrite: {
          '*': '',
        },
        target: 'https://ya-praktikum.tech',
      }),
    )
    this.app.use(cookieParser())
    this.app.use(json())
  }

  private useRoutes(): void {
    this.app.use(
      '/api/themes',
      AuthMiddleware,
      AuthGuardMiddleware,
      this.topicController.router,
    )
    this.app.use(
      '/api/comments',
      AuthMiddleware,
      AuthGuardMiddleware,
      this.commentController.router,
    )
    this.app.use(
      '/api/settings',
      AuthMiddleware,
      AuthGuardMiddleware,
      this.userSettingsController.router,
    )
  }

  private useExceptionFilters(): void {
    this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter))
  }

  async init(): Promise<void> {
    this.useMiddleware()
    this.useRoutes()
    await this.dbService.connect()
    // TODO CAR-66 переписать подключение сервера, уйти от зависимости userSettingsService
    await server(
      this.app,
      this.userSettingsService.findOrCreate.bind(this.userSettingsService),
    )
    this.useExceptionFilters()
    this.server = this.app.listen(this.port)
    this.logger.info(`[App] 🎸 Server is listening on port: ${this.port}`)
  }
}
