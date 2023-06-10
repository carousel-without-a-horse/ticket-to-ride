import { Draft } from './ui/Draft'
import { Players } from './ui/Players'
import { Map } from './ui/Map'

import type { CSSProperties } from 'react'

import { colors } from '@/app/providers/colors'

const styles: Record<string, CSSProperties> = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '1180px',
    height: '900px',
    padding: '10px',
    maxWidth: '1180px',
    backgroundColor: colors.game.background,
    borderRadius: 8,
  },
  bottomPanel: {
    height: 150,
    backgroundColor: 'green',
  },
}

const mainPanelStyles: Record<string, CSSProperties> = {
  wrapper: {
    display: 'flex',
    height: 720,
    marginBottom: 10,
  },
  leftColumn: {
    width: 1000,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginRight: 10,
  },
}

export const Game = () => {
  return (
    <div style={styles.wrapper}>
      <div style={mainPanelStyles.wrapper}>
        <div style={mainPanelStyles.leftColumn}>
          <Players />

          <Map />
        </div>

        <Draft />
      </div>

      <div style={styles.bottomPanel}>
        <div>Menu</div>
        <div>Routes cards</div>
        <div>Hand cards</div>
      </div>
    </div>
  )
}
