import { gridCoordsList } from './gridCoordsList'
import { COUNT_COINS_ON_LEVEL } from './settings'

import type { TCoords } from '@/widgets/Arcade/types'

export const getRandomCoords = (): TCoords[] => {
  const shuffled = gridCoordsList.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, COUNT_COINS_ON_LEVEL)
}
