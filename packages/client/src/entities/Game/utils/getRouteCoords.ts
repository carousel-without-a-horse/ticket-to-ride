import { cities } from '@/entities/Game/data/cities'
import { gameSetup } from '@/entities/Game/data/gameSetup'

import type { TCityKey } from '@/entities/Game/data/cities'

interface IReturn {
  x1: number
  y1: number
  x2: number
  y2: number
}

// Определение координат крайних точек прямой
// учитывая радиус города
const getRouteCoords = (nearbyCities: TCityKey[]): IReturn => {
  // Определяем координаты городов
  const firstCity = nearbyCities[0]
  const secondCity = nearbyCities[1]
  const x1 = cities[firstCity].x
  const y1 = cities[firstCity].y
  const x2 = cities[secondCity].x
  const y2 = cities[secondCity].y

  const routeLength = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

  const radiusRatio = gameSetup.city.radius / routeLength

  const deltaX = x2 - x1
  const deltaY = y2 - y1

  const indentDeltaX = deltaX * radiusRatio
  const indentDeltaY = deltaY * radiusRatio

  return {
    x1: x1 + indentDeltaX,
    y1: y1 + indentDeltaY,
    x2: x2 - indentDeltaX,
    y2: y2 - indentDeltaY,
  }
}

export default getRouteCoords
