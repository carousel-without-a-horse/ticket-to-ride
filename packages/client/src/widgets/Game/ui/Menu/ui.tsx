import { Button } from '@/shared/ui/Game/Button'

import type { CSSProperties } from 'react'

const styles: Record<string, CSSProperties> = {
  wrapper: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 6,
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    height: 30,
    fontSize: 12,
    marginBottom: 10,
  },
}

export const Menu = () => {
  return (
    <div style={styles.wrapper}>
      <Button style={styles.button}>Завершить ход</Button>

      <Button style={styles.button}>Меню</Button>
    </div>
  )
}
