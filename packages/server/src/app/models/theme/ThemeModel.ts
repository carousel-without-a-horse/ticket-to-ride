import { Model, Column, Table, DataType } from 'sequelize-typescript'

@Table({
  timestamps: true,
  paranoid: false,
  tableName: 'themes',
})
export class Theme extends Model {
  @Column(DataType.STRING)
  name: string

  @Column(DataType.STRING)
  description: string
}
