import { httpService } from '@/shared/services/httpService'
import type { TThemeService, TTheme, TThemeDetail } from './types'
import type { TInfiniteQuery } from '@/shared/types/query'

export const themeServices: TThemeService = {
  getAll: async ({ pageParam = 0 }) => {
    return await httpService
      .get<TInfiniteQuery<TTheme>>('/themes', {
        params: {
          cursor: pageParam,
        },
      })
      .then(res => res.data)
  },
  getItem: async ({ id }) => {
    return await httpService
      .get<TThemeDetail>(`/themes/${id}`)
      .then(res => res.data)
  },
}
