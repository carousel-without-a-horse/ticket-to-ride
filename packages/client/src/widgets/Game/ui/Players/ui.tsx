import type { CSSProperties } from 'react'

const styles: Record<string, CSSProperties> = {
  wrapper: {
    height: 80,
    backgroundColor: 'red',
    marginBottom: 10,
  },
}

export const Players = () => {
  return <div style={styles.wrapper}>Players</div>
}
