import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useStore } from '@/shared/store'
import { Layout } from '@/shared/ui/Layout'
import { Game } from '@/widgets/Game'
import { ROUTES } from '@/app/router/config'
import { Button } from '@/shared/ui/Game/Button'

import styles from './styles.module.pcss'

const GamePage = () => {
  const gameRef = useRef<HTMLDivElement>(null)
  const { gameStore } = useStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (gameStore.gameStatus !== 'gameInProcess') {
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

  return gameStore.gameStatus === 'gameInProcess' ? (
    <Layout className={styles.layout} ref={gameRef}>
      <Game />
      <Button // Костыль, что бы попадать на страницу конца игры, коллбеки следует перенести в логику, которая сработает после завершения игры.
        onClick={() => {
          gameStore.setGameStatus('endGame')
          navigate(ROUTES.endGame)
        }}
      >
        Конец игры
      </Button>
    </Layout>
  ) : (
    <></>
  )
}

export default GamePage
