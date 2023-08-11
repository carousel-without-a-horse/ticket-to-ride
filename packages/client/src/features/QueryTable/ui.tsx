import { useTranslation } from 'react-i18next'
import { useCallback, useEffect, useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from '@tanstack/react-query'

import { Table } from '@/shared/ui/Table'
import { Space } from '@/shared/ui/Space'
import { Button } from '@/shared/ui/Button'

import { getFetchingDescription } from './utils'

import type { TQueryTableProps, TDefaultData } from './types'

export const QueryTable = <Data extends TDefaultData>({
  queryKey,
  queryFn,
  meta,
  ...props
}: TQueryTableProps<Data>) => {
  const { ref, inView } = useInView()
  const { t } = useTranslation()

  const {
    error,
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey,
    queryFn,
    meta,
    staleTime: 10 * 60 * 1000,
    getPreviousPageParam: firstPage => firstPage.previousId ?? undefined,
    getNextPageParam: lastPage => lastPage.nextId ?? undefined,
  })

  useEffect(() => {
    if (inView) {
      void fetchNextPage()
    }
  }, [fetchNextPage, inView])

  const dataSource = useMemo(() => {
    return data?.pages
      .map(item => item.data.map(i => ({ ...i, key: i.id })))
      .flat()
  }, [data?.pages])

  const handleRefetch = useCallback(() => {
    void refetch()
  }, [refetch])

  const footer = () => {
    if (isLoading) return null
    if (error) {
      return (
        <Space>
          <span>{t('table.loader.error')}</span>
          <Button onClick={handleRefetch}>{t('table.loader.retry')}</Button>
        </Space>
      )
    }

    const fetchingDescription = getFetchingDescription(
      isFetchingNextPage,
      hasNextPage
    )

    return <span ref={ref}>{fetchingDescription}</span>
  }

  return (
    <Table
      dataSource={dataSource}
      loading={isLoading}
      footer={footer}
      pagination={false}
      {...props}
    />
  )
}
