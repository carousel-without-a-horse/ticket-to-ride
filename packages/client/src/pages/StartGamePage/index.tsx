import { Card } from '@/shared/ui/Card'
import { Content } from '@/shared/ui/Layout'

import StartGame from './ui'

const StartGamePage = () => {
  const cardStyle = {
    marginBottom: 50,
    width: '100%',
    maxWidth: 1024,
  }

  return (
    <Content>
      <Card style={cardStyle}>
        <StartGame />
      </Card>
    </Content>
  )
}

export default StartGamePage
