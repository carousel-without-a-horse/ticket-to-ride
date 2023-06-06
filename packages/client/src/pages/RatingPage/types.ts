export interface IColumn {
  title: string
  dataIndex: string
  key: string
  ellipsis?: boolean
  width?: number
}

export type TColumns = IColumn[]

export interface IDataRow {
  key: string
  num: string
  user: string
  scores: number
}

export type TDataSource = IDataRow[]
