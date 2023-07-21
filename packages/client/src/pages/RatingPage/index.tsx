import { useEffect, useState } from 'react'

import { Card } from '@/shared/ui/Card'
import { Table } from '@/shared/ui/Table'
import { Content } from '@/shared/ui/Layout'
import ratingServices from '@/shared/services/ratingServices'
import { ratingFieldName } from '@/shared/constants/apiConsts'
import { Spin } from '@/shared/ui/Spin'

import { columns } from './utils/columns'
import { responseConverter } from './utils/responseConverter'

import styles from './styles.module.pcss'

import type { TDataSource } from './types'

const scroll = { y: '45vh' }

const RatingPage = () => {
  const [ratingData, setRatingData] = useState<TDataSource>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    ratingServices
      .getRating({
        ratingFieldName: ratingFieldName,
        cursor: 0,
        limit: 10,
      })
      .then(response => {
        setRatingData(responseConverter(response))
        setIsLoading(false)
      })
      .catch(console.error)
  }, [])

  return (
    <Content>
      <Card title="Рейтинг Игроков" className={styles.card}>
        {isLoading ? (
          <Spin className={styles.spin} tip="Загрузка" size="large">
            <div />
          </Spin>
        ) : (
          <Table
            dataSource={ratingData}
            columns={columns}
            pagination={false}
            className={styles.table}
            scroll={scroll}
          />
        )}
      </Card>
    </Content>
  )
}

export default RatingPage
