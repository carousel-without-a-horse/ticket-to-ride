import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { inject, injectable } from 'inversify'

import { TYPES } from '../types'
import { Topic } from '../app/models/topic'
import { Comment } from '../app/models/comment'

import type { ILoggerService } from '../app/services/loggerService'
import type { IConfigService } from '../app/services/configService'

@injectable()
export class DBService {
  client: Sequelize

  constructor(
    @inject(TYPES.Logger) private logger: ILoggerService,
    @inject(TYPES.ConfigService) config: IConfigService,
  ) {
    const sequelizeOptions: SequelizeOptions = {
      host: config.get('POSTGRES_HOST'),
      port: +config.get('POSTGRES_PORT'),
      username: config.get('POSTGRES_USER'),
      password: config.get('POSTGRES_PASSWORD'),
      database: config.get('POSTGRES_DB'),
      dialect: 'postgres',
      models: [Topic, Comment],
      repositoryMode: true,
    }

    this.client = new Sequelize(sequelizeOptions)
  }

  async connect(): Promise<void> {
    try {
      await this.client.authenticate()
      await this.client.sync({ force: true })
      this.logger.info('[DBService] Connected to the database')
    } catch (error) {
      if (error instanceof Error) {
        this.logger.info(
          '[DBService] Error connecting to database:' + error.message,
        )
      }
    }
  }
}
