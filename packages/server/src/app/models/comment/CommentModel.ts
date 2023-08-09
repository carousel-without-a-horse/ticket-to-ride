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

@Table({
  timestamps: true,
  paranoid: false,
  tableName: 'comments',
})
export class Comment extends Model {
  @Column(DataType.INTEGER)
  userId: number

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
