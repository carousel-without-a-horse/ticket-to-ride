import { Card } from '@/shared/ui/Card'
import { Table } from '@/shared/ui/Table'
import { Content } from '@/shared/ui/Layout'

import { dataSource } from './data'
import { columns } from './utils/columns'

import styles from './styles.module.pcss'

const scroll = { y: '45vh' }
const RatingPage = () => {
  return (
    <Content>
      <Card title="Рейтинг Игроков" className={styles.card}>
        <Table
          dataSource={dataSource}
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
