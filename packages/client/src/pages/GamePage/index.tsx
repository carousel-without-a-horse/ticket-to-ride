import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { t } from 'i18next'

import { useStore } from '@/shared/store'
import { Layout } from '@/shared/ui/Layout'
import { Game } from '@/widgets/Game'
import { useUserAttention } from '@/shared/hooks'
import { ROUTES } from '@/app/router/config'
import { Button } from '@/shared/ui/Game/Button'
import { useNotification } from '@/shared/utils/notification/intex'
import { endGame, gameInProcess } from '@/shared/constants/gameStatus'

import styles from './styles.module.pcss'

const GamePage = () => {
  const { gameStore } = useStore()
  const navigate = useNavigate()
  const gameRef = useRef<HTMLDivElement>(null)
  const [api, contextHolder] = useNotification()

  useUserAttention({
    onBackAction: () => {
      api.info({
        message: t('notification.attention'),
        description: t('notification.dontGoFar'),
        placement: 'topLeft',
      })
    },
  })

  useEffect(() => {
    if (gameStore.gameStatus !== gameInProcess) {
      navigate(ROUTES.root)
    }

    const handleFButton = (event: KeyboardEvent) => {
      if (event.key === 'f') {
        const element = gameRef.current

        if (element?.requestFullscreen) {
          element
            .requestFullscreen()
            .then(() => console.log('in full screen'))
            .catch(err => console.log(err))
        }
      }
    }
    window.addEventListener('keydown', handleFButton)

    return () => {
      window.removeEventListener('keydown', handleFButton)
    }
  }, [gameStore, navigate])

  if (gameStore.gameStatus !== gameInProcess) {
    return null
  }

  return (
    <Layout className={styles.layout} ref={gameRef}>
      {contextHolder}
      <Game />
      {/* Костыль, что бы попадать на страницу конца игры, коллбеки следует перенести в логику, которая сработает после завершения игры. */}
      <Button
        onClick={() => {
          gameStore.setGameStatus(endGame)
          navigate(ROUTES.endGame)
        }}
      >
        Конец игры
      </Button>
    </Layout>
  )
}

export default GamePage
