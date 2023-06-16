import type { CSSProperties } from 'react'

const styles: Record<string, CSSProperties> = {
  wrapper: {
    width: 200,
    display: 'flex',
  },
}

export const Hand = () => {
  return <div style={styles.wrapper}></div>
}
