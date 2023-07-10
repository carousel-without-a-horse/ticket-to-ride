import { useTranslation } from 'react-i18next'

import { Card } from '@/shared/ui/Card'
import { Content } from '@/shared/ui/Layout'

import StartGame from './ui'

import styles from './styles.module.pcss'

const StartGamePage = () => {
  const { t } = useTranslation()

  return (
    <Content>
      <Card className={styles.card} title={t('startGame.pageTitle')}>
        <StartGame />
      </Card>
    </Content>
  )
}

export default StartGamePage
