import { Layout } from '@/shared/ui/Layout'
import { Game } from '@/widgets/Game'
import { Button } from 'antd'

import { type CSSProperties, useRef, useEffect } from 'react'

const styles: Record<string, CSSProperties> = {
  layout: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

const AboutPage = () => {
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
    <div ref={gameRef}>
      <Layout style={styles.layout}>
        <Game />
      </Layout>
    </div>
  )
}

export default AboutPage
