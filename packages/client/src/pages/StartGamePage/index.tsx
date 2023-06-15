import { useNavigate } from 'react-router-dom'

import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Content } from '@/shared/ui/Layout'
import { ROUTES } from '@/app/router/config'

const StartGame = () => {
  const navigate = useNavigate()

  return (
    <Content>
      <Card
        title="title"
        style={{
          marginBottom: 50,
          width: '100%',
          maxWidth: 1024,
        }}
      >
        <Button
          block={true}
          type="primary"
          style={{ marginBottom: 15 }}
          onClick={() => navigate(ROUTES.game)}
        >
          Играть
        </Button>
        <Button block={true} onClick={() => navigate(ROUTES.root)}>
          Назад
        </Button>
      </Card>
    </Content>
  )
}

export default StartGame
