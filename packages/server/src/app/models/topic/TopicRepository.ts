import { inject, injectable } from 'inversify'
import { Op, fn, col } from 'sequelize'

import { DBService } from '../../../database/DBService'
import { TYPES } from '../../../types'
import { Comment } from '../comment'
import { getNextId } from '../../utils/cursorPagination'

import { Topic } from './TopicModel'

import type { TopicCreateOrEditDto } from './dto'
import type { ITopicRepository, TCursorPagination, TModelTopic } from './types'
import type { Repository } from 'sequelize-typescript'

@injectable()
export class TopicRepository implements ITopicRepository {
  topicRepository: Repository<Topic>
  commentRepository: Repository<Comment>
  pageSize = 10
  constructor(@inject(TYPES.DBService) dbService: DBService) {
    this.topicRepository = dbService.client.getRepository(Topic)
    this.commentRepository = dbService.client.getRepository(Comment)
  }

  async all(cursor: number): TCursorPagination<Topic> {
    const where = cursor === 0 ? {} : { id: { [Op.lte]: cursor } }
    const data = await this.topicRepository.findAll({
      where,
      order: [['id', 'DESC']],
      limit: this.pageSize,
      include: [
        {
          model: this.commentRepository,
          attributes: [],
        },
      ],
      attributes: {
        include: [[fn('COUNT', col('comments.id')), 'commentsCount']],
      },
      subQuery: false,
      group: ['Topic.id'],
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

  async read(id: number): Promise<Topic | false> {
    const topic = await this.topicRepository.findByPk(id, {
      include: this.commentRepository,
    })

    return topic || false
  }

  async update(id: number, body: TopicCreateOrEditDto): Promise<Topic | false> {
    const topic = await this.topicRepository.findByPk(id)
    if (!topic) {
      return false
    }
    return await topic.set(body).save()
  }

  async delete(id: number): Promise<boolean> {
    // https://sequelize.org/docs/v6/other-topics/hooks/#hooks-for-cascade-deletes
    const topic = await this.topicRepository.findByPk(id)
    if (!topic) {
      return false
    }

    void topic.destroy()
    return true
  }
}
