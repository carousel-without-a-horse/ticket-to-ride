export type TColumn = {
  title: string
  dataIndex: string
  key: string
  ellipsis?: boolean
  width?: number
}

export type TColumns = TColumn[]

export type TDataRow = {
  key: string
  num: string
  user: string
  scores: number
}

export type TDataSource = TDataRow[]
