import { variables } from '@/widgets/Arcade/utils/constants'

import type { TCoords } from '@/widgets/Arcade/types'

export const getRowCoordsList = (rowLevel: number): TCoords[] =>
  Array(variables.arcadeNumberOfGridColumns)
    .fill(undefined)
    .map((_, i) => [i, rowLevel])

export const gridCoordsList: TCoords[] = Array(variables.arcadeNumberOfGridRows)
  .fill(undefined)
  .map((_, i) => getRowCoordsList(i))
  .flat(1)
