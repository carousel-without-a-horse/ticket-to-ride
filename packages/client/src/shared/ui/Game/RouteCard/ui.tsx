import { colors } from '@/app/providers/colors'
import { routeCards } from '@/widgets/Game/data/routeCards'

import type { CSSProperties } from 'react'
import type { IProps } from './types'

const styles: Record<string, CSSProperties> = {
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: 250,
    padding: 10,
    marginRight: 10,
    borderRadius: 6,
    backgroundColor: colors.game.blueMedium,
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  canvas: {
    width: 170,
    height: 84,
    borderRadius: 6,
    backgroundColor: colors.game.background,
  },
  title: {
    color: colors.game.text,
    fontWeight: 600,
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  points: {
    height: 50,
    width: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: colors.game.pink,
  },
  pointsText: {
    fontSize: 20,
    fontWeight: 500,
  },
}

export const RouteCard = ({ routeKey }: IProps) => {
  const { cities, points } = routeCards[routeKey]

  return (
    <div style={styles.wrapper}>
      <div style={styles.leftColumn}>
        <canvas style={styles.canvas}></canvas>

        <span>
          {cities[0]} - {cities[1]}
        </span>
      </div>

      <div style={styles.rightColumn}>
        <div style={styles.points}>
          <span style={styles.pointsText}>{points}</span>
        </div>
      </div>
    </div>
  )
}
