import type { AxiosResponse } from 'axios'
import type { TDataSource } from '../types'

export const responseConverter = (response: AxiosResponse): TDataSource => {
  const result: TDataSource = []
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  response.data.forEach(
    (item: { data: { login: string; rating: string } }, i: number) => {
      result.push({
        key: i.toString(),
        num: (i + 1).toString(),
        user: item.data.login,
        scores: Number(item.data.rating),
      })
    }
  )

  return result
}
