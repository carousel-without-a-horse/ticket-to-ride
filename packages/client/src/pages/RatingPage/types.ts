export type TColumn = {
  title: string
  dataIndex: string
  key: string
  ellipsis?: boolean
  width?: number
}

export type TDataRow = {
  key: string
  num: string
  user: string
  scores: number
}

export type TDataSource = TDataRow[]

export type TRatingResponseItem = {
  data: {
    login: string
    rating: string
  }
}
