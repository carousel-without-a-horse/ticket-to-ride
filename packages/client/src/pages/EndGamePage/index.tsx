import { useNavigate } from 'react-router-dom'

import { Card } from '@/shared/ui/Card'
import { Table } from '@/shared/ui/Table'
import { Content } from '@/shared/ui/Layout'
import { Button } from '@/shared/ui/Button'
import { ROUTES } from '@/app/router/config'

import { dataSource } from './data'
import { columns } from './utils/columns'

const EndGame = () => {
  const navigate = useNavigate()

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
          style={{ width: '100%', maxWidth: 1024, marginBottom: 40 }}
          scroll={{ y: '45vh' }}
        />
        <Button
          type="primary"
          block={true}
          style={{ marginBottom: 10 }}
          onClick={() => navigate(ROUTES.startGame)}
        >
          Начать сначала
        </Button>
        <Button block={true} onClick={() => navigate(ROUTES.root)}>
          Выйти
        </Button>
      </Card>
    </Content>
  )
}

export default EndGame
