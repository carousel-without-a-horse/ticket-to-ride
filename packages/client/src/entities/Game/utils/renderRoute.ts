import { gameSetup } from '@/entities/Game/data/gameSetup'
import { drawLines } from '@/shared/utils/canvas/drawLines'

const { height } = gameSetup.route

export const renderRoute = (
  ctx: CanvasRenderingContext2D,
  { x, y }: { x: number; y: number }, // начальная точка элемента пути
  angle: number, // угол поворота
  width: number, // длинна пути
  color: string // цвет пути
): void => {
  ctx.save()

  ctx.translate(x, y)
  ctx.rotate(angle)
  ctx.lineWidth = 1
  ctx.strokeStyle = color

  const startX = 0
  const startY = 0 - height / 2

  const verticalOffset = height / 4

  // Первая рельса
  const rail1 = {
    x1: startX,
    y1: startY + verticalOffset * 1,
    x2: startX + width,
    y2: startY + verticalOffset * 1,
  }

  // Вторая рельса
  const rail2 = {
    x1: startX,
    y1: startY + verticalOffset * 3,
    x2: startX + width,
    y2: startY + verticalOffset * 3,
  }

  drawLines(ctx, [rail1, rail2])

  // Шпалы
  const tieStep = gameSetup.route.tieStep
  const tieLength = Math.floor(width / tieStep)

  for (let i = 1; i < tieLength; i++) {
    const tie = {
      x1: startX + tieStep * i,
      y1: startY,
      x2: startX + tieStep * i,
      y2: startY + height,
    }

    drawLines(ctx, [tie])
  }

  ctx.restore()
}
