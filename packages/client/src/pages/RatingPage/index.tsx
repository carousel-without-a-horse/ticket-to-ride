import { withAuth } from '@/shared/hocs'
import { Card } from '@/shared/ui/Card'
import { Table } from '@/shared/ui/Table'
import { Content } from '@/shared/ui/Layout'

import { dataSource } from './data'
import { columns } from './utils/columns'

const RatingPage = withAuth(() => {
  return (
    <Content>
      <Card
        title="Рейтинг Игроков"
        style={{
          marginBottom: 50,
          width: '100%',
          maxWidth: 1024,
        }}
      >
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          style={{ width: '100%', maxWidth: 1024 }}
          scroll={{ y: '45vh' }}
        />
      </Card>
    </Content>
  )
})

export default RatingPage
