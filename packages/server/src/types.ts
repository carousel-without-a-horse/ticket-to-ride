import type { App } from './app'
import type { Container } from 'inversify'

export type TBootstrapReturn = {
  appContainer: Container
  app: App
}
export const TYPES = {
  Application: Symbol.for('Application'),
  Logger: Symbol.for('Logger'),
  ConfigService: Symbol.for('ConfigService'),
  DBService: Symbol.for('DBService'),
  TopicController: Symbol.for('TopicController'),
  TopicRepository: Symbol.for('TopicRepository'),
  TopicService: Symbol.for('TopicService'),
  CommentController: Symbol.for('CommentController'),
  CommentRepository: Symbol.for('CommentRepository'),
  CommentService: Symbol.for('CommentService'),
  ExceptionFilter: Symbol.for('ExceptionFilter'),
}
