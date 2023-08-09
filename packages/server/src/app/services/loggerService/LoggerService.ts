import { Logger } from 'tslog'
import { injectable } from 'inversify'

import type { ILoggerService } from './types'

@injectable()
export class LoggerService implements ILoggerService {
  public logger: Logger<unknown>

  constructor() {
    this.logger = new Logger()
  }

  info(...args: unknown[]): void {
    this.logger.info(...args)
  }

  error(...args: unknown[]): void {
    // TODO: настроить отправку ошибок в sentry
    this.logger.error(...args)
  }

  warn(...args: unknown[]): void {
    this.logger.warn(...args)
  }
}
