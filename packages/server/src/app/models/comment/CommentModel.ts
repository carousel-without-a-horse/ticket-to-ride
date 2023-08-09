import {
  Model,
  Column,
  Table,
  DataType,
  ForeignKey,
  Index,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript'

import { Topic } from '../topic'
import { User } from '../user'

@Table({
  timestamps: true,
  paranoid: false,
  tableName: 'comments',
})
export class Comment extends Model {
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number

  @BelongsTo(() => User)
  user: User

  @Column(DataType.TEXT)
  content: string

  @ForeignKey(() => Comment)
  @Column(DataType.INTEGER)
  parentId: number

  @ForeignKey(() => Topic)
  @Index
  @Column(DataType.INTEGER)
  topicId: number

  @BelongsTo(() => Topic)
  topic: Topic

  @HasMany(() => Comment, {
    foreignKey: 'parentId',
    onDelete: 'CASCADE',
    hooks: true,
  })
  child?: Comment[]
}
