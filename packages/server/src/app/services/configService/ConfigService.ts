import { inject, injectable } from 'inversify'

import { TYPES } from '../../../types'

import type { DotenvParseOutput } from 'dotenv'
import type { IConfigService } from './types'
import type { ILoggerService } from '../loggerService'

@injectable()
export class ConfigService implements IConfigService {
  private readonly config: DotenvParseOutput

  constructor(@inject(TYPES.Logger) private logger: ILoggerService) {
    this.config = process.env as DotenvParseOutput
    this.logger.info('[ConfigService] Configuration of .env file loaded')
  }

  get(key: string): string {
    return this.config[key]
  }
}
