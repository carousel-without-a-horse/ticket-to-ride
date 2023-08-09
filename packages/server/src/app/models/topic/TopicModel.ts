import { Model, Column, Table, DataType, HasMany } from 'sequelize-typescript'

import { Comment } from '../comment'

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

  @Column(DataType.INTEGER)
  userId: number

  @HasMany(() => Comment, {
    foreignKey: 'topicId',
    onDelete: 'CASCADE',
    hooks: true, // https://sequelize.org/docs/v6/other-topics/hooks/#hooks-for-cascade-deletes
  })
  comments: Comment[]
}
