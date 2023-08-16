import { httpService } from '@/shared/services/httpService'

import type { TLikeService, TLike } from './types'

export const likeServices: TLikeService = {
  getAll: data => {
    return httpService
      .get<TLike[]>(`/likes/${data.type}/${data.id}`)
      .then(res => res.data)
  },
  toggleLike: data => {
    return httpService
      .put<TLike>('/likes/toggleLike', data)
      .then(res => res.data)
  },
  toggleDislike: data => {
    return httpService
      .put<TLike>('/likes/toggleDislike', data)
      .then(res => res.data)
  },
}
