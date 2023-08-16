import { inject, injectable } from 'inversify'

import { TYPES } from '../../../types'
import { DBService } from '../../../database/DBService'
import { UserRepository } from '../user'

import { UserSettings } from './UserSettingsModel'

import type { UserSettingsUpdateDto } from './dto'
import type { Repository } from 'sequelize-typescript'

@injectable()
export class UserSettingsRepository {
  userSettingsRepository: Repository<UserSettings>
  constructor(
    @inject(TYPES.DBService) dbService: DBService,
    @inject(TYPES.UserRepository) private userRepository: UserRepository,
  ) {
    this.userSettingsRepository = dbService.client.getRepository(UserSettings)
  }

  async findOrCreate(userId: number): Promise<UserSettings> {
    const user = await this.userRepository.findOrCreate({
      id: userId,
      settings: {
        userId,
      },
    })

    return user.settings
  }

  async update(
    userId: number,
    data: UserSettingsUpdateDto,
  ): Promise<UserSettings> {
    const settings = await this.findOrCreate(userId)
    return settings.set(data).save()
  }
}
