import { cities } from './cities'
import { gameSetup } from './gameSetup'

import type { TCityKey } from './cities'

// Определение координат крайних точек прямой
// учитывая радиус города
const getRouteCoords = (nearbyCities: TCityKey[]) => {
  // Определяем координаты городов
  const x1 = cities[nearbyCities[0]].x
  const y1 = cities[nearbyCities[0]].y
  const x2 = cities[nearbyCities[1]].x
  const y2 = cities[nearbyCities[1]].y

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
