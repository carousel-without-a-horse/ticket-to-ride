import { IconCoin, IconHeadTrain } from '@/shared/images/game'
import { characters } from '@/entities/Game/data/characters'

import styles from './styles.module.pcss'

import type { IProps } from './types'

export const Player = ({ player: { character, points, trains } }: IProps) => {
  const Icon = characters[character].icon

  const renderPointsBlock = (type: 'points' | 'trains', count: number) => (
    <div
      className={styles.points}
      style={{ backgroundColor: characters[character].color }}
    >
      <img
        src={type === 'points' ? IconCoin : IconHeadTrain}
        alt={type === 'points' ? 'Очки' : 'Поезда'}
        width={28}
        height={28}
        loading="lazy"
        style={{ marginBottom: 5 }}
      />

      <span style={{ fontWeight: 600 }}>{count}</span>
    </div>
  )

  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundColor: characters[character].bgColor,
      }}
    >
      <div
        className={styles.icon}
        style={{
          backgroundColor: characters[character].color,
        }}
      >
        <img src={Icon} alt="PlayerIcon" />
      </div>

      {renderPointsBlock('points', points)}

      {renderPointsBlock('trains', trains)}
    </div>
  )
}
