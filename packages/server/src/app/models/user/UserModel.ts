import {
  Model,
  Column,
  Table,
  DataType,
  PrimaryKey,
  HasMany,
  HasOne,
} from 'sequelize-typescript'

import { Topic } from '../topic'
import { UserSettings } from '../userSettings'

@Table({
  timestamps: true,
  paranoid: false,
  tableName: 'users',
})
export class User extends Model {
  @PrimaryKey
  @Column(DataType.INTEGER)
  override id: number

  @Column(DataType.STRING)
  login: string

  @Column(DataType.STRING)
  avatar: string

  @HasMany(() => Topic, {
    foreignKey: 'userId',
  })
  topics: Topic[]

  @HasOne(() => UserSettings, {
    foreignKey: 'userId',
  })
  settings: UserSettings
}
