import { Layout } from '@/shared/ui/Layout'
import { Game } from '@/widgets/Game'

import type { CSSProperties } from 'react'

const styles: Record<string, CSSProperties> = {
  layout: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

const GamePage = () => {
  return (
    <Layout style={styles.layout}>
      <Game />
    </Layout>
  )
}

export default GamePage
