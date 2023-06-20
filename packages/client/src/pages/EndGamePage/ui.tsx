import { useNavigate } from 'react-router-dom'

import { Card } from '@/shared/ui/Card'
import { Table } from '@/shared/ui/Table'
import { Button } from '@/shared/ui/Button'
import { ROUTES } from '@/app/router/config'

import { dataSource } from './data'
import { columns } from './utils/columns'

import styles from './styles.module.pcss'

const scroll = { y: '45vh' }

const EndGame = () => {
  const navigate = useNavigate()

  return (
    <Card title="Результаты" className={styles.card}>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        className={styles.table}
        scroll={scroll}
      />
      <Button
        type="primary"
        block={true}
        className={styles.button}
        onClick={() => navigate(ROUTES.startGame)}
      >
        Начать сначала
      </Button>
    </Card>
  )
}

export default EndGame
