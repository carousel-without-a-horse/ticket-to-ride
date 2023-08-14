export type TLike = {
  id: TId
  userId: TId
  likeableId: TId
  likeableType: TId
  isLike: boolean | null
}

type TLikeDto = {
  id: TId
  type: string
}

export type TLikeService = {
  toggleLike: (data: TLikeDto) => Promise<TLike>
  toggleDislike: (data: TLikeDto) => Promise<TLike>
  getAll: (data: TLikeDto) => Promise<TLike[]>
}
