import { inject, injectable } from 'inversify'

import { TYPES } from '../../../types'

import { LikeRepository } from './LikeRepository'

import type { LikeDto } from './dto'
import type { Like } from './LikeModel'

@injectable()
export class LikeService {
  constructor(
    @inject(TYPES.LikeRepository)
    private likeRepository: LikeRepository,
  ) {}

  toggleLike(props: LikeDto & { userId: number }): Promise<Like> {
    return this.likeRepository.toggleLike(props)
  }

  toggleDislike(props: LikeDto & { userId: number }): Promise<Like> {
    return this.likeRepository.toggleDislike(props)
  }

  getAll(props: LikeDto): Promise<Like[]> {
    return this.likeRepository.getAll(props)
  }
}
