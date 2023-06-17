import { IconCoin, IconHeadTrain } from '@/shared/images/game'
import { characters } from '@/entities/Game/data/characters'

import type { CSSProperties } from 'react'
import type { IProps } from './types'

const styles: Record<string, CSSProperties> = {
  wrapper: {
    height: '100%',
    width: 180,
    marginRight: 10,
    borderRadius: 8,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    height: 60,
    width: 60,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  points: {
    height: 60,
    width: 40,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

export const Player = ({ character }: IProps) => {
  const Icon = characters[character].icon

  // TODO: заменить на динамические данные
  const data = {
    coins: 40,
    trains: 23,
  }

  const renderPointsBlock = (type: keyof typeof data) => (
    <div
      style={{
        ...styles.points,
        backgroundColor: characters[character].color,
      }}
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
      style={{
        ...styles.wrapper,
        backgroundColor: characters[character].bgColor,
      }}
    >
      <div
        style={{
          ...styles.icon,
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
