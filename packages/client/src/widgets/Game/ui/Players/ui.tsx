import { Player } from '@/shared/ui/Game/Player'
import type { CSSProperties } from 'react'

const styles: Record<string, CSSProperties> = {
  wrapper: {
    height: 80,
    marginBottom: 10,
    display: 'flex',
  },
}

export const Players = () => {
  return (
    <div style={styles.wrapper}>
      <Player character="banana" />

      <Player character="grape" />
    </div>
  )
}
