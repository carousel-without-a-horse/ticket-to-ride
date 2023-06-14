import { Layout } from '@/shared/ui/Layout'
import { Game } from '@/widgets/Game'
import { Button } from 'antd'

import { type CSSProperties, useRef } from 'react'

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

  const handleClick = () => {
    const element = gameRef.current
    if (element?.requestFullscreen) {
      element
        .requestFullscreen()
        .then(() => console.log('in full screen'))
        .catch(err => console.log(err))
    }
  }

  return (
    <Layout style={styles.layout}>
      <Button onClick={handleClick}>На полный экран</Button>
      <div ref={gameRef}>
        <Game />
      </div>
    </Layout>
  )
}

export default AboutPage
