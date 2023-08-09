import { colors } from '@/shared/constants/colors'

import { Draft } from './ui/Draft'
import { Players } from './ui/Players'
import { Map } from './ui/Map'
import { Menu } from './ui/Menu'
import { RouteCards } from './ui/RouteCards'
import { Hand } from './ui/Hand'

import type { CSSProperties } from 'react'

const styles: Record<string, CSSProperties> = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '1180px',
    height: '900px',
    padding: '10px',
    maxWidth: '1180px',
    backgroundColor: colors.background,
    borderRadius: 8,
  },
  bottomPanel: {
    height: 150,
    display: 'flex',
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
        <Menu />

        <RouteCards />

        <Hand />
      </div>
    </div>
  )
}
