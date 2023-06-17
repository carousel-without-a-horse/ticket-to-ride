import { useState } from 'react'

import { colors } from '@/app/providers/colors'
import { colorCards } from '@/entities/Game/data/colorCards'
import { IconRainbow } from '@/shared/images/game'

import stylesIm from './styles.module.pcss'

import type { IProps } from './types'
import type { CSSProperties } from 'react'

const { text: textColor, greenCold } = colors.game

const styles: Record<string, CSSProperties> = {
  card: {
    width: 130,
    height: 70,
    borderRadius: 6,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

export const Card = ({ type }: IProps) => {
  const [isSelected, setIsSelected] = useState(false)

  const { color } = colorCards[type]
  const borderWidth = isSelected ? 4 : 1
  const borderColor = isSelected ? greenCold : textColor

  return (
    <div
      style={{
        ...styles.card,
        backgroundColor: color,
        border: `${borderWidth}px solid ${borderColor}`,
      }}
      className={stylesIm.card}
      onClick={() => setIsSelected(prev => !prev)}
    >
      {type === 'rainbow' && <img src={IconRainbow} alt="IconRainbow" />}
    </div>
  )
}
