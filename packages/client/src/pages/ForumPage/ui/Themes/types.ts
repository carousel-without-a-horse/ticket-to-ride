type TThemesType = 'all' | 'my'

export type TThemes = {
  type: TThemesType
}

export type TDataType = {
  key: string
  id: string
  theme: string
  author: string
  commentsCount: number
}
