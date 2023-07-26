import type { TComment } from '@/entities/comment'

export type TComments = {
  id: TId
}

export type TBuildComment = TComment & {
  children?: TBuildComment[]
}

export type TBuildComments = (
  comments: TComment[],
  id?: number | null
) => TBuildComment[]
