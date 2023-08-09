import {
  Model,
  Column,
  Table,
  DataType,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript'

import { Comment } from '../comment'
import { User } from '../user'

@Table({
  timestamps: true,
  paranoid: false,
  tableName: 'topics',
})
export class Topic extends Model {
  @Column(DataType.STRING)
  title: string

  @Column(DataType.TEXT)
  content: string

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number

  @BelongsTo(() => User)
  user: User

  @HasMany(() => Comment, {
    foreignKey: 'topicId',
    onDelete: 'CASCADE',
    hooks: true, // https://sequelize.org/docs/v6/other-topics/hooks/#hooks-for-cascade-deletes
  })
  comments: Comment[]
}
