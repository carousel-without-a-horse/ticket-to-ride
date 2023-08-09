import { inject, injectable } from 'inversify'
import { Op } from 'sequelize'

import { DBService } from '../../../database/DBService'
import { TYPES } from '../../../types'
import { Comment } from '../comment'
import { getNextId } from '../../utils/cursorPagination'
import { User } from '../user'
import { HTTPError } from '../../errors'

import { Topic } from './TopicModel'

import type { WhereOptions } from 'sequelize/types/model'
import type { TopicCreateOrEditDto } from './dto'
import type { TCursorPagination, TModelTopic } from './types'
import type { Repository } from 'sequelize-typescript'

@injectable()
export class TopicRepository {
  topicRepository: Repository<Topic>
  commentRepository: Repository<Comment>
  userRepository: Repository<User>
  pageSize = 10
  constructor(@inject(TYPES.DBService) dbService: DBService) {
    this.topicRepository = dbService.client.getRepository(Topic)
    this.commentRepository = dbService.client.getRepository(Comment)
    this.userRepository = dbService.client.getRepository(User)
  }

  async all(cursor: number, userId?: number): TCursorPagination<Topic> {
    const where: WhereOptions<any> = {}
    if (cursor !== 0) {
      where['id'] = { [Op.lte]: cursor }
    }

    if (userId) {
      where['userId'] = { [Op.eq]: userId }
    }
    const data = await this.topicRepository.findAll({
      where,
      order: [['id', 'DESC']],
      limit: this.pageSize,
      include: [
        {
          model: this.commentRepository,
          attributes: ['id'],
        },
        {
          model: this.userRepository,
          attributes: ['id', 'login'],
        },
      ],
      subQuery: false,
    })

    const nextId = getNextId(data, this.pageSize)

    return {
      data,
      nextId,
    }
  }

  create(
    { title, content }: TopicCreateOrEditDto,
    userId: number,
  ): TModelTopic {
    return this.topicRepository.create({ title, content, userId })
  }

  async read(id: number): Promise<Topic> {
    const topic = await this.topicRepository.findByPk(id, {
      include: [
        {
          model: this.userRepository,
          attributes: ['id', 'login'],
        },
      ],
    })

    if (!topic) {
      throw new HTTPError(422, 'Топик не найден', 'TopicRepository')
    }

    return topic
  }

  async update(
    id: number,
    body: TopicCreateOrEditDto,
    currentUserId: number,
  ): Promise<Topic> {
    const topic = await this.topicRepository.findByPk(id)
    if (!topic) {
      throw new HTTPError(422, 'Топик не найден', 'TopicRepository')
    }
    if (topic.userId !== currentUserId) {
      throw new HTTPError(
        403,
        'Вы не можете редактировать этот топик! В досутпе отказано!',
        'TopicRepository',
      )
    }
    return await topic.set(body).save()
  }

  async delete(id: number, currentUserId: number): Promise<boolean> {
    // https://sequelize.org/docs/v6/other-topics/hooks/#hooks-for-cascade-deletes
    const topic = await this.topicRepository.findByPk(id)
    if (!topic) {
      throw new HTTPError(422, 'Топик не найден', 'TopicRepository')
    }

    if (topic.userId !== currentUserId) {
      throw new HTTPError(
        403,
        'Вы не можете удалить этот топик! В досутпе отказано!',
        'TopicRepository',
      )
    }

    void topic.destroy()
    return true
  }
}
