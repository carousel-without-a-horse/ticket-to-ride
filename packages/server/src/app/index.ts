import { inject, injectable } from 'inversify'
import express, { json } from 'express'
import cors from 'cors'
import { createProxyMiddleware } from 'http-proxy-middleware'
import cookieParser from 'cookie-parser'

import { DBService } from '../database/DBService'
import { TYPES } from '../types'

import { developmentServer, productionServer } from './services/serverService'
import { AuthMiddleware, AuthGuardMiddleware } from './middlewares'

import type { Express } from 'express'
import type { Server } from 'http'
import type { ILoggerService } from './services/loggerService'
import type { IConfigService } from './services/configService'
import type { IExceptionFilter } from './errors/types'
import type { TTopicController } from './models/topic'
import type { TCommentController } from './models/comment'

@injectable()
export class App {
  app: Express
  server: Server | undefined

  port: number
  isDev: boolean

  constructor(
    @inject(TYPES.Logger) private logger: ILoggerService,
    @inject(TYPES.ConfigService) private config: IConfigService,
    @inject(TYPES.TopicController) private topicController: TTopicController,
    @inject(TYPES.CommentController)
    private commentController: TCommentController,
    @inject(TYPES.DBService) private dbService: DBService,
    @inject(TYPES.ExceptionFilter) private exceptionFilter: IExceptionFilter,
  ) {
    this.app = express()
    const port = this.config.get('SERVER_PORT')
    this.port = port ? Number(port) : 3000
    this.isDev = process.env.NODE_ENV === 'development'
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
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      AuthMiddleware,
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      AuthGuardMiddleware,
      this.topicController.router,
    )
    this.app.use(
      '/api/comments',
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      AuthMiddleware,
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      AuthGuardMiddleware,
      this.commentController.router,
    )
  }

  private useExceptionFilters(): void {
    this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter))
  }

  async init(): Promise<void> {
    this.useMiddleware()
    this.useRoutes()
    await this.dbService.connect()
    if (this.isDev) {
      await developmentServer(this.app)
    } else {
      productionServer(this.app)
    }
    this.useExceptionFilters()
    this.server = this.app.listen(this.port)
    this.logger.info(`[App] 🎸 Server is listening on port: ${this.port}`)
  }
}
