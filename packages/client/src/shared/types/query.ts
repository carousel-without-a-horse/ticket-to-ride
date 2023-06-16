export type TInfiniteQuery<Data> = {
  data: Data[]
  nextId: number
  previousId: number
}
