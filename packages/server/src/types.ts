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
  UserRepository: Symbol.for('UserRepository'),
  UserService: Symbol.for('UserService'),
  UserSettingsController: Symbol.for('UserSettingsController'),
  UserSettingsRepository: Symbol.for('UserSettingsRepository'),
  UserSettingsService: Symbol.for('UserSettingsService'),
  ExceptionFilter: Symbol.for('ExceptionFilter'),
}
