// Получение расстояния от точки до прямой
const getDistanceToLine = (
  x: number, // х координата точки
  y: number, // у координата точки
  x1: number, // х координата начальной точки прямой
  y1: number, // у координата начальной точки прямой
  x2: number, // х координата конечной точки прямой
  y2: number // у координата конечной точки прямой
): number => {
  const A = x - x1
  const B = y - y1
  const C = x2 - x1
  const D = y2 - y1

  const dot = A * C + B * D
  const lenSq = C * C + D * D
  const param = lenSq === 0 ? -1 : dot / lenSq

  let xx, yy

  if (param < 0) {
    xx = x1
    yy = y1
  } else if (param > 1) {
    xx = x2
    yy = y2
  } else {
    xx = x1 + param * C
    yy = y1 + param * D
  }

  const dx = x - xx
  const dy = y - yy

  return Math.sqrt(dx * dx + dy * dy)
}

export default getDistanceToLine
