import { Card } from '@/shared/ui/Card'
import { Content } from '@/shared/ui/Layout'

import StartGame from './ui'

import styles from './styles.module.pcss'

const StartGamePage = () => {
  return (
    <Content>
      <Card className={styles.card}>
        <StartGame />
      </Card>
    </Content>
  )
}

export default StartGamePage
