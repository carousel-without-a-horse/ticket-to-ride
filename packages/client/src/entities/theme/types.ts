import type { QueryMeta } from '@tanstack/react-query'
import type { TInfiniteQuery } from '@/shared/types/query'

type TThemeAuthor = {
  id: TId
  login: string
}

export type TTheme = {
  id: TId
  title: string
  user: TThemeAuthor
  comments: TId[]
}

export type TThemeDetail = {
  id: TId
  title: string
  user: TThemeAuthor
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
  getAll: (props: {
    pageParam?: number
    meta?: QueryMeta
  }) => Promise<TInfiniteQuery<TTheme>>
  getItem: (props: { id: TId }) => Promise<TThemeDetail>
  create: (data: TThemeCreateDto) => Promise<TThemeDetail>
  delete: (props: { id: TId }) => Promise<boolean>
  update: (data: TThemeUpdateDto) => Promise<TThemeDetail>
}
