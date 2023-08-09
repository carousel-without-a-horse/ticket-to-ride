import { inject, injectable } from 'inversify'

import { TYPES } from '../../../types'
import { DBService } from '../../../database/DBService'
import { UserSettings } from '../userSettings'

import { User } from './UserModel'

import type { Repository } from 'sequelize-typescript'
@injectable()
export class UserRepository {
  userRepository: Repository<User>
  userSettingsRepository: Repository<UserSettings>
  constructor(@inject(TYPES.DBService) dbService: DBService) {
    this.userRepository = dbService.client.getRepository(User)
    this.userSettingsRepository = dbService.client.getRepository(UserSettings)
  }

  upsert(data: TUser): Promise<[User, boolean | null]> {
    return this.userRepository.upsert(data)
  }

  async findOrCreate(
    data: Pick<User, 'id'> &
      Partial<Omit<User, 'id' | 'settings'>> & {
        settings?: Partial<UserSettings>
      },
  ): Promise<User> {
    const [user] = await this.userRepository.findOrCreate({
      where: {
        id: data.id,
      },
      defaults: data,
      include: [this.userSettingsRepository],
    })
    return user
  }
}
