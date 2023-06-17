import type { characters } from '@/entities/Game/data/characters'

export interface IProps {
  character: keyof typeof characters
}
