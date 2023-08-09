/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { AxiosResponse } from 'axios'
import type { TDataSource, TRatingResponseItem } from '../types'

export const responseConverter = (response: AxiosResponse): TDataSource => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  const result: TDataSource = response.data.map(
    (item: TRatingResponseItem, i: number) => {
      return {
        key: i.toString(),
        num: (i + 1).toString(),
        user: item.data.login,
        scores: Number(item.data.rating),
      }
    }
  )
  result.sort((a, b) => b.scores - a.scores)

  return result
}
