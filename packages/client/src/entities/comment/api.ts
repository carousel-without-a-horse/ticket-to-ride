import { httpService } from '@/shared/services/httpService'

import type { TCommentService, TComment } from './types'

export const commentServices: TCommentService = {
  getCommentsByTopicId: topicId => {
    return httpService
      .get<TComment[]>(`/comments/${topicId}`)
      .then(res => res.data)
  },
  create: data => {
    return httpService.post<TComment>('/comments', data).then(res => res.data)
  },
}
