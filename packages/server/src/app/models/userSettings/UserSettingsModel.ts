import {
  Model,
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  Unique,
  AllowNull,
} from 'sequelize-typescript'

import { User } from '../user'
import { Theme } from '../theme'
import { Lang } from '../lang'

@Table({
  timestamps: true,
  paranoid: false,
  tableName: 'userSettings',
})
export class UserSettings extends Model {
  @AllowNull(false)
  @Unique
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number

  @BelongsTo(() => User)
  user: User

  @ForeignKey(() => Theme)
  @Column(DataType.INTEGER)
  themeId: number

  @BelongsTo(() => Theme)
  theme: Theme

  @ForeignKey(() => Lang)
  @Column(DataType.INTEGER)
  langId: number

  @BelongsTo(() => Lang)
  lang: Lang
}
