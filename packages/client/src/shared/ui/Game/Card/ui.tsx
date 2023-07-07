import { colors } from '@/shared/constants/colors'
import { IconRainbow } from '@/shared/images/game'

import stylesIm from './styles.module.pcss'

import type { IProps } from './types'

const { text: textColor, greenCold } = colors

export const Card = ({
  card,
  selectedCardsIndexes,
  setSelectedCardsIndexes,
  cardIndex,
}: IProps) => {
  const isSelected = selectedCardsIndexes.includes(cardIndex)
  const isDisabled = !isSelected && selectedCardsIndexes.length === 2

  const selectedBorderWidth = 4
  const notSelectedBorderWidth = 1
  const borderWidth = isSelected ? selectedBorderWidth : notSelectedBorderWidth
  const borderColor = isSelected ? greenCold : textColor

  const onSelect = () => {
    if (!isDisabled) {
      setSelectedCardsIndexes(prev => {
        return isSelected
          ? prev.filter(element => element !== cardIndex)
          : [...prev, cardIndex]
      })
    }
  }

  return (
    <button
      style={{
        backgroundColor: card.color,
        border: `${borderWidth}px solid ${borderColor}`,
      }}
      className={stylesIm.card}
      onClick={onSelect}
      type="button"
    >
      {card.type === 'rainbow' && (
        <img
          src={IconRainbow}
          width={50}
          height={50}
          loading="lazy"
          alt="Радуга"
        />
      )}
    </button>
  )
}
