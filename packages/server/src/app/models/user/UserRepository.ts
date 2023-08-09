import { inject, injectable } from 'inversify'

import { TYPES } from '../../../types'
import { DBService } from '../../../database/DBService'

import { User } from './UserModel'

import type { Repository } from 'sequelize-typescript'
@injectable()
export class UserRepository {
  userRepository: Repository<User>
  constructor(@inject(TYPES.DBService) dbService: DBService) {
    this.userRepository = dbService.client.getRepository(User)
  }

  upsert(data: TUser): Promise<[User, boolean | null]> {
    return this.userRepository.upsert(data)
  }
}
