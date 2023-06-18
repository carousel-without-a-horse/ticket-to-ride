import { type CSSProperties, useRef, useEffect } from 'react'

import { withAuth } from '@/shared/hocs'
import { Layout } from '@/shared/ui/Layout'
import { Game } from '@/widgets/Game'

const styles: Record<string, CSSProperties> = {
  layout: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

const GamePage = withAuth(() => {
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
    <Layout style={styles.layout} ref={gameRef}>
      <Game />
    </Layout>
  )
})

export default GamePage
