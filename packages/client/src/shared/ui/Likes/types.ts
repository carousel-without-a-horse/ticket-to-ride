export type TLikes = {
  vote?: boolean
  likesCount?: number
  dislikesCount?: number
  onChange: (value?: boolean) => void
}
