import 'reflect-metadata'
import { Container, ContainerModule, interfaces } from 'inversify'

import { LoggerService } from './app/services/loggerService'
import { ConfigService, IConfigService } from './app/services/configService'
import { App } from './app'
import { DBService } from './database/DBService'
import { ExceptionFilter } from './app/errors/ExceptionFilter'
import { TYPES } from './types'
import {
  TopicService,
  TopicController,
  TopicRepository,
} from './app/models/topic'
import {
  CommentController,
  CommentService,
  CommentRepository,
} from './app/models/comment'

import type { TTopicController } from './app/models/topic'
import type { TBootstrapReturn } from './types'
import type { ILoggerService } from './app/services/loggerService'
import type { IExceptionFilter } from './app/errors/types'
import type { TCommentController } from './app/models/comment'

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
  bind<ILoggerService>(TYPES.Logger).to(LoggerService).inSingletonScope()
  bind<IExceptionFilter>(TYPES.ExceptionFilter).to(ExceptionFilter)
  bind<IConfigService>(TYPES.ConfigService).to(ConfigService).inSingletonScope()
  bind<TTopicController>(TYPES.TopicController).to(TopicController)
  bind<TopicService>(TYPES.TopicService).to(TopicService)
  bind<TopicRepository>(TYPES.TopicRepository)
    .to(TopicRepository)
    .inSingletonScope()
  bind<TCommentController>(TYPES.CommentController).to(CommentController)
  bind<CommentService>(TYPES.CommentService).to(CommentService)
  bind<CommentRepository>(TYPES.CommentRepository)
    .to(CommentRepository)
    .inSingletonScope()
  bind<DBService>(TYPES.DBService).to(DBService).inSingletonScope()
  bind<App>(TYPES.Application).to(App)
})

async function boostrap(): Promise<TBootstrapReturn> {
  const appContainer = new Container()
  appContainer.load(appBindings)
  const app = appContainer.get<App>(TYPES.Application)
  await app.init()
  return { appContainer, app }
}

export const boot = boostrap()
