import { IconCoin, IconHeadTrain } from '@/shared/images/game'
import { characters } from '@/entities/Game/data/characters'

import styles from './styles.module.pcss'

import type { IProps } from './types'

export const Player = ({ character }: IProps) => {
  const Icon = characters[character].icon

  // TODO: заменить на динамические данные
  const data = {
    coins: 40,
    trains: 23,
  }

  const renderPointsBlock = (type: keyof typeof data) => (
    <div
      className={styles.points}
      style={{ backgroundColor: characters[character].color }}
    >
      <img
        src={type === 'coins' ? IconCoin : IconHeadTrain}
        alt={type}
        style={{ marginBottom: 5 }}
      />

      <span style={{ fontWeight: 600 }}>{data[type]}</span>
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

      {renderPointsBlock('coins')}

      {renderPointsBlock('trains')}
    </div>
  )
}
