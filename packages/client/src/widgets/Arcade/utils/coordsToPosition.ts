import { variables } from './constants'

import type { TCoords } from '../types'

export const coordsToPosition = (coords: TCoords) =>
  coords.map(value => `${value * variables.arcadeGridSquareSize}px`)
