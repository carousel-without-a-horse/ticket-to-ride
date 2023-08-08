type TAuthorComment = {
  id: TId
  login: string
  avatar?: string
}

export type TComment = {
  id: TId
  content: string
  parentId: TId
  topicId: TId
  user: TAuthorComment
  updatedAt: string
  createdAt: string
}

type TCommentCreateDto = {
  topicId: TId
  content: string
  parentId?: TId
}

export type TCommentService = {
  getCommentsByTopicId: (topicId: TId) => Promise<TComment[]>
  create: (data: TCommentCreateDto) => Promise<TComment>
}
