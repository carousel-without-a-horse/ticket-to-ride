import { httpService } from '@/shared/services/httpService'

import type { TThemeService, TTheme, TThemeDetail } from './types'
import type { TInfiniteQuery } from '@/shared/types/query'

export const themeServices: TThemeService = {
  getAll: props => {
    return httpService
      .get<TInfiniteQuery<TTheme>>('/themes', {
        params: {
          cursor: props.pageParam,
          isMy: props.meta?.isMy,
        },
      })
      .then(res => res.data)
  },
  getItem: ({ id }) => {
    return httpService.get<TThemeDetail>(`/themes/${id}`).then(res => res.data)
  },
  delete: ({ id }) => {
    return httpService.delete<boolean>(`/themes/${id}`).then(res => res.data)
  },
  create: data => {
    return httpService.post<TThemeDetail>('/themes', data).then(res => res.data)
  },
  update: ({ id, ...data }) => {
    return httpService
      .put<TThemeDetail>(`/themes/${id}`, data)
      .then(res => res.data)
  },
}
