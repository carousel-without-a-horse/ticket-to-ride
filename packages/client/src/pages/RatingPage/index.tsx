import { useEffect, useState } from 'react'

import { Card } from '@/shared/ui/Card'
import { Table } from '@/shared/ui/Table'
import { Content } from '@/shared/ui/Layout'
import ratingServices from '@/shared/services/ratingServices'
import { ratingFieldName } from '@/shared/constants/apiConsts'

import { columns } from './utils/columns'
import { responseConverter } from './utils/responseConverter'

import styles from './styles.module.pcss'

import type { TDataSource } from './types'

const scroll = { y: '45vh' }

const RatingPage = () => {
  const [ratingData, setRatingData] = useState<TDataSource>()
  useEffect(() => {
    ratingServices
      .getRating({
        ratingFieldName: ratingFieldName,
        cursor: 0,
        limit: 10,
      })
      .then(response => {
        setRatingData(responseConverter(response))
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <Content>
      <Card title="Рейтинг Игроков" className={styles.card}>
        <Table
          dataSource={ratingData}
          columns={columns}
          pagination={false}
          className={styles.table}
          scroll={scroll}
        />
      </Card>
    </Content>
  )
}

export default RatingPage
