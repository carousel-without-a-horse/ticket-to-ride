import { colors } from '@/shared/constants/colors'
import { IconRainbow } from '@/shared/images/game'
import { useStore } from '@/shared/store'

import stylesIm from './styles.module.pcss'

import type { IProps } from './types'

const { text: textColor, greenCold } = colors

export const Card = ({
  card,
  selectedCardsIndexes,
  setSelectedCardsIndexes,
  cardIndex,
}: IProps) => {
  const {
    gameStore: {
      draft: { open },
    },
  } = useStore()

  const isSelected = selectedCardsIndexes.includes(cardIndex)
  const isDisabled = !isSelected && selectedCardsIndexes.length === 2

  const selectedBorderWidth = 4
  const notSelectedBorderWidth = 1
  const borderWidth = isSelected ? selectedBorderWidth : notSelectedBorderWidth
  const borderColor = isSelected ? greenCold : textColor

  const onSelect = () => {
    if (!isDisabled) {
      setSelectedCardsIndexes(prev => {
        if (isSelected) return prev.filter(element => element !== cardIndex)
        return [...prev, cardIndex]
      })
    }
  }

  return (
    <div
      style={{
        backgroundColor: card.color,
        border: `${borderWidth}px solid ${borderColor}`,
      }}
      className={stylesIm.card}
      onClick={onSelect}
    >
      {card.type === 'rainbow' && <img src={IconRainbow} alt="IconRainbow" />}
    </div>
  )
}
