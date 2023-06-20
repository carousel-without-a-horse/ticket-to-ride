import type { colorCards } from '@/entities/Game/data/colorCards'

export interface IProps {
  type: keyof typeof colorCards
}
