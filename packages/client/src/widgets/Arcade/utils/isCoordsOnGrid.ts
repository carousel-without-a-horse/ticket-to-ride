import { isEqualCoords } from './isEqualCoords'
import { gridCoordsList } from './gridCoordsList'

import type { TCoords } from '../types'

export const isCoordsOnGrid = (coords: TCoords): boolean => {
  return gridCoordsList.some(gridCoords => isEqualCoords(gridCoords, coords))
}
