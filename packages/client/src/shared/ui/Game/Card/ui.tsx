import { useState } from 'react'

import { colors } from '@/shared/constants/colors'
import { colorCards } from '@/entities/Game/data/colorCards'
import { IconRainbow } from '@/shared/images/game'

import stylesIm from './styles.module.pcss'

import type { IProps } from './types'

const { text: textColor, greenCold } = colors

export const Card = ({ type }: IProps) => {
  const [isSelected, setIsSelected] = useState(false)

  const { color } = colorCards[type]
  const selectedBorderWidth = 4
  const notSelectedBorderWidth = 1
  const borderWidth = isSelected ? selectedBorderWidth : notSelectedBorderWidth
  const borderColor = isSelected ? greenCold : textColor

  return (
    <div
      style={{
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
