import type { TColorCard } from '@/entities/Game/data/colorCards'
import type { Dispatch, SetStateAction } from 'react'

export interface IProps {
  card: TColorCard
  cardIndex: number
  selectedCardsIndexes: number[]
  setSelectedCardsIndexes: Dispatch<SetStateAction<number[]>>
}
