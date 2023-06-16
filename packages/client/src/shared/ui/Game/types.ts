import type { characters } from '@/widgets/Game/data/characters'

export interface IProps {
  character: keyof typeof characters
}
