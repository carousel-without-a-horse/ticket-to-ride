import type { TInfiniteQuery } from '@/shared/types/query'

export type TTheme = {
  id: TId
  title: string
  author: string
  commentsCount: number
}

export type TThemeDetail = {
  id: TId
  title: string
  author: {
    id: string
    name: string
  }
  content: string
  tags: string[]
}

type TThemeCreateDto = {
  title: string
  content: string
}

type TThemeUpdateDto = {
  id: TId
  title: string
  content: string
}

export type TThemeService = {
  getAll: (props: { pageParam?: number }) => Promise<TInfiniteQuery<TTheme>>
  getItem: (props: { id: TId }) => Promise<TThemeDetail>
  create: (data: TThemeCreateDto) => Promise<TThemeDetail>
  update: (data: TThemeUpdateDto) => Promise<TThemeDetail>
}
