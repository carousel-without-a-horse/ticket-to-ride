import { httpService } from '@/shared/services/httpService'
import type { TThemeService, TTheme, TThemeDetail } from './types'
import type { TInfiniteQuery } from '@/shared/types/query'

export const themeServices: TThemeService = {
  getAll: ({ pageParam = 0 }) => {
    return httpService
      .get<TInfiniteQuery<TTheme>>('/themes', {
        params: {
          cursor: pageParam,
        },
      })
      .then(res => res.data)
  },
  getItem: ({ id }) => {
    return httpService.get<TThemeDetail>(`/themes/${id}`).then(res => res.data)
  },
}
