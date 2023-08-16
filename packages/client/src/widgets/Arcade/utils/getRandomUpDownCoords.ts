import { variables } from '@/widgets/Arcade/utils/constants'

import type { TCoords } from '@/widgets/Arcade/types'

export const getColCoordsList = (colLevel: number): TCoords[] =>
  Array(variables.arcadeNumberOfGridRows)
    .fill(undefined)
    .map((_, i) => [colLevel, i])

const getRandomNum = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
export const getRandomUpDownCoords = (): [TCoords, TCoords] => {
  const columnNum = getRandomNum(1, variables.arcadeNumberOfGridColumns - 2)
  const rowNum = getRandomNum(0, variables.arcadeNumberOfGridRows - 2)
  const col = getColCoordsList(columnNum)
  return col.splice(rowNum, 2) as [TCoords, TCoords]
}
