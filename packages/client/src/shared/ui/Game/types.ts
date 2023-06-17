import type { characters } from '@/shared/constants/options'

export interface IProps {
  character: keyof typeof characters
}
