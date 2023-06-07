import type { TLikes } from '@/shared/ui/Likes'

export type TOnVote = (props: { id: string; value: TLikes['vote'] }) => void

export type TOnReply = (props: { id: string; value: string }) => void

export type TComment = {
  id: string
  author: {
    id: string
    name: string
    avatar?: string
  }
  date: string
  content: string
  vote?: Omit<TLikes, 'onChange'>
  onVote?: TOnVote
  onReply?: TOnReply
}

export type TComments = {
  id: string
  entity?: 'theme'
}
