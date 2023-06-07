import { Card } from '@/shared/ui/Card'
import { Table } from '@/shared/ui/Table'
import { Content } from '@/shared/ui/Layout'
import { dataSource } from './data'
import { columns } from './utils/columns'

const RatingPage = () => {
  return (
    <Content>
      <Card
        title="Рейтинг Игроков"
        style={{
          marginBottom: 50,
          width: '100%',
          maxWidth: 1024,
          height: 'calc(100vh - (64px + 50px * 2))',
          overflow: 'auto',
        }}
      >
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          style={{ width: '100%', maxWidth: 1024 }}
          scroll={{ y: 550 }}
        />
      </Card>
    </Content>
  )
}

export default RatingPage
