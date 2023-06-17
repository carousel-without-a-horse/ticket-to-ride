import { routeCards } from '@/entities/Game/data/routeCards'

import styles from './styles.module.pcss'

import type { IProps } from './types'

export const RouteCard = ({ routeKey }: IProps) => {
  const { cities, points } = routeCards[routeKey]

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftColumn}>
        <canvas className={styles.canvas}></canvas>

        <span>
          {cities[0]} - {cities[1]}
        </span>
      </div>

      <div className={styles.rightColumn}>
        <div className={styles.points}>
          <span>{points}</span>
        </div>
      </div>
    </div>
  )
}
