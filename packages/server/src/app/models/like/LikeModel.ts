import {
  Model,
  Column,
  Table,
  DataType,
  AfterFind,
  Index,
  BelongsTo,
  Default,
  ForeignKey,
} from 'sequelize-typescript'

import { Topic } from '../topic'
import { Comment } from '../comment'
import { User } from '../user'

@Table({
  timestamps: true,
  paranoid: false,
  tableName: 'likes',
})
export class Like extends Model {
  @Index({
    name: 'like',
    unique: true,
  })
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number

  @BelongsTo(() => User)
  user: User

  @Default(null)
  @Column(DataType.BOOLEAN)
  isLike: boolean

  @Index({
    name: 'like',
    unique: true,
  })
  @Column(DataType.INTEGER)
  likeableId: number

  @Index({
    name: 'like',
    unique: true,
  })
  @Column(DataType.STRING)
  likeableType: string

  @BelongsTo(() => Topic, {
    foreignKey: 'likeableId',
    constraints: false,
  })
  topic?: Topic

  @BelongsTo(() => Comment, {
    foreignKey: 'likeableId',
    constraints: false,
  })
  comment?: Comment
  likeable: Topic | Comment

  @AfterFind
  static test(findResult: Like | Like[] | null) {
    console.log('findResult', findResult)
    if (!findResult) return
    if (!Array.isArray(findResult)) findResult = [findResult]
    for (const instance of findResult) {
      if (
        instance.likeableType === 'comment' &&
        instance.comment !== undefined
      ) {
        instance.likeable = instance.comment
      } else if (
        instance.likeableType === 'topic' &&
        instance.topic !== undefined
      ) {
        instance.likeable = instance.topic
      }
      // To prevent mistakes:
      delete instance.comment
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      delete instance.dataValues.comment
      delete instance.topic
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      delete instance.dataValues.topic
    }
  }
}
