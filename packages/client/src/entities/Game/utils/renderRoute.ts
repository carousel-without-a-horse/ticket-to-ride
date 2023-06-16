import { gameSetup } from '@/widgets/Game/data/gameSetup'

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
  ctx.beginPath()
  ctx.moveTo(rail1.x1, rail1.y1)
  ctx.lineTo(rail1.x2, rail1.y2)
  ctx.stroke()
  ctx.closePath()

  // Вторая рельса
  const rail2 = {
    x1: startX,
    y1: startY + verticalOffset * 3,
    x2: startX + width,
    y2: startY + verticalOffset * 3,
  }
  ctx.beginPath()
  ctx.moveTo(rail2.x1, rail2.y1)
  ctx.lineTo(rail2.x2, rail2.y2)
  ctx.stroke()
  ctx.closePath()

  // Шпалы
  const tieStep = gameSetup.route.tieStep
  const tieLength = Math.floor(width / tieStep)

  for (let i = 1; i < tieLength; i++) {
    ctx.beginPath()
    ctx.moveTo(startX + tieStep * i, startY)
    ctx.lineTo(startX + tieStep * i, startY + height)
    ctx.stroke()
    ctx.closePath()
  }

  ctx.restore()
}
