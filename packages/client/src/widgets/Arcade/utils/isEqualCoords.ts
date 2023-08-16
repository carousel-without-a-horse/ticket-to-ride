import type { TCoords } from '../types'

type TIsEqualCoords = (coordsA: TCoords, coordsB: TCoords) => boolean
export const isEqualCoords: TIsEqualCoords = (coordsA, coordsB) => {
  const [coordsAX, coordsAY] = coordsA
  const [coordsBX, coordsBY] = coordsB
  return coordsAX === coordsBX && coordsAY === coordsBY
}
