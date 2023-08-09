import { Model, Column, Table, DataType } from 'sequelize-typescript'

@Table({
  timestamps: true,
  paranoid: false,
  tableName: 'languages',
})
export class Lang extends Model {
  @Column(DataType.STRING)
  code: string

  @Column(DataType.STRING)
  description: string
}
