import { inject, injectable } from 'inversify'

import { TYPES } from '../../../types'

import { UserSettingsRepository } from './UserSettingsRepository'

import type { UserSettingsUpdateDto } from './dto'
import type { UserSettings } from './UserSettingsModel'

@injectable()
export class UserSettingsService {
  constructor(
    @inject(TYPES.UserSettingsRepository)
    private userSettingsRepository: UserSettingsRepository,
  ) {}
  findOrCreate(userId: number): Promise<UserSettings> {
    return this.userSettingsRepository.findOrCreate(userId)
  }

  update(userId: number, data: UserSettingsUpdateDto): Promise<UserSettings> {
    return this.userSettingsRepository.update(userId, data)
  }
}
