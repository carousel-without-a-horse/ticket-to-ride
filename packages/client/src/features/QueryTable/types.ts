import type { TableProps } from 'antd'
import type { TInfiniteQuery } from '@/shared/types/query'

export type TDefaultData = { id: string }

export type TQueryTableProps<Data extends TDefaultData> = Omit<
  TableProps<Data>,
  'dataSource'
> & {
  queryKey: string[]
  queryFn: (props: { pageParam?: number }) => Promise<TInfiniteQuery<Data>>
}
