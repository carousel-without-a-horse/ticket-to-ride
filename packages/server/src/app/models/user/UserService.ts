import { inject, injectable } from 'inversify'

import { TYPES } from '../../../types'

import { UserRepository } from './UserRepository'

@injectable()
export class UserService {
  constructor(
    @inject(TYPES.UserRepository) private userRepository: UserRepository,
  ) {}
  async upsert(data: TUser): Promise<TUser> {
    const [user] = await this.userRepository.upsert(data)
    return user
  }
}
