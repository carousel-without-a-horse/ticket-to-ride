import { colors } from '@/app/providers/colors'
import type { CSSProperties } from 'react'
import { colorCards } from '@/widgets/Game/data/colorCards'
import { IconRainbow } from '@/shared/images/game'
import type { IProps } from './types'

const styles: Record<string, CSSProperties> = {
  card: {
    width: 130,
    height: 70,
    borderRadius: 6,
    border: `1px solid ${colors.game.text}`,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

export const Card = ({ type }: IProps) => {
  const { color } = colorCards[type]

  return (
    <div
      style={{
        ...styles.card,
        backgroundColor: color,
      }}
    >
      {type === 'rainbow' && <img src={IconRainbow} alt="IconRainbow" />}
    </div>
  )
}
