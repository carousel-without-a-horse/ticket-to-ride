import { inject, injectable } from 'inversify'

import { TYPES } from '../../../types'
import { DBService } from '../../../database/DBService'

import { Like } from './LikeModel'

import type { LikeDto } from './dto'
import type { Repository } from 'sequelize-typescript'

@injectable()
export class LikeRepository {
  likeRepository: Repository<Like>
  constructor(@inject(TYPES.DBService) dbService: DBService) {
    this.likeRepository = dbService.client.getRepository(Like)
  }

  async toggleLike(data: LikeDto & { userId: number }): Promise<Like> {
    const like = await this.findOrCreate(data)
    const isLike = like.isLike === null || !like.isLike ? true : null
    return like.set({ isLike }).save()
  }

  async toggleDislike(data: LikeDto & { userId: number }): Promise<Like> {
    const like = await this.findOrCreate(data)
    const isLike = like.isLike === null || like.isLike ? false : null
    return like.set({ isLike }).save()
  }

  private async findOrCreate({
    id,
    type,
    userId,
  }: LikeDto & { userId: number }): Promise<Like> {
    const [like] = await this.likeRepository.findOrCreate({
      where: {
        likeableId: id,
        likeableType: type,
        userId,
      },
      defaults: {
        likeableId: id,
        likeableType: type,
        userId,
      },
    })

    return like
  }

  getAll({ id, type }: LikeDto): Promise<Like[]> {
    return this.likeRepository.findAll({
      where: {
        likeableId: id,
        likeableType: type,
      },
    })
  }
}
