export type TLikes = {
  vote?: boolean
  countLikes?: number
  countDislikes?: number
  onChange: (value?: boolean) => void
}
