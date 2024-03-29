import type { QueryMeta } from '@tanstack/react-query'
import type { TableProps } from 'antd'
import type { TInfiniteQuery } from '@/shared/types/query'

export type TDefaultData = { id: TId }

export type TQueryTableProps<Data extends TDefaultData> = Omit<
  TableProps<Data>,
  'dataSource'
> & {
  queryKey: string[]
  queryFn: (props: {
    pageParam?: number
    meta?: QueryMeta
  }) => Promise<TInfiniteQuery<Data>>
  meta?: QueryMeta
}
