import { useRef, useEffect } from 'react'

import { Layout } from '@/shared/ui/Layout'
import { Game } from '@/widgets/Game'

import styles from './styles.module.pcss'

const GamePage = () => {
  const gameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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
  }, [])

  return (
    <Layout className={styles.layout} ref={gameRef}>
      <Game />
    </Layout>
  )
}

export default GamePage
