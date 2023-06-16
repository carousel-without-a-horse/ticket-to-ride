import type { TInfiniteQuery } from '@/shared/types/query'

export type TTheme = {
  id: string
  name: string
  author: string
  commentsCount: number
}

export type TThemeDetail = {
  id: string
  name: string
  author: {
    id: string
    name: string
  }
  content: string
  tags: string[]
}

export type TThemeService = {
  getAll: (props: { pageParam?: number }) => Promise<TInfiniteQuery<TTheme>>
  getItem: (props: { id: string }) => Promise<TThemeDetail>
}
