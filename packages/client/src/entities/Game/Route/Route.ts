import { colors } from '@/app/providers/colors'
import { gameSetup } from '@/widgets/Game/data/gameSetup'
import getRouteCoords from '@/entities/Game/utils/getRouteCoords'
import getDistanceToLine from '@/entities/Game/utils/getDistanceToLine'
import { renderTrain } from '@/entities/Game/utils/renderTrain'

import type { IRoute } from '@/widgets/Game/data/routes'

interface IPassedProps extends IRoute {
  name: string
}

interface IProps extends IPassedProps {
  x1: number
  y1: number
  x2: number
  y2: number
  color: string
}

export class Route {
  private props: Required<IProps>
  private isMouseover = false
  private isRouteLaid = false
  private canvas?: HTMLCanvasElement
  private ctx?: CanvasRenderingContext2D

  constructor(passedProps: IPassedProps) {
    const routeCoords = getRouteCoords(passedProps.cities)

    this.props = {
      ...passedProps,
      ...routeCoords,
      color: colors.game[passedProps.paths[0]],
    }
  }

  draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    this.ctx = ctx
    this.canvas = canvas

    const { x1, y1, x2, y2 } = this.props

    const dX = x2 - x1
    const dY = y2 - y1

    const routeLength = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2) // Общая длина пути
    const gapLength = gameSetup.route.gap // Длина разрыва между элементами пути
    const gapRatio = gapLength / routeLength // Определение процента разрыва от общей длины
    const segmentsCount = this.props.length // Кол-во элементов пути
    const allGapsLength = (segmentsCount + 1) * gapLength // Длина всех разрывов
    const segmentLength = (routeLength - allGapsLength) / segmentsCount // Длина одного элемента пути
    const segmentRatio = segmentLength / routeLength // Процент элемента пути от общего пути

    const gapDX = dX * gapRatio
    const gapDY = dY * gapRatio

    const segmentDX = dX * segmentRatio
    const segmentDY = dY * segmentRatio

    let currentX = x1 + gapDX
    let currentY = y1 + gapDY

    ctx.beginPath()
    ctx.moveTo(currentX, currentY)

    // Рисование сегментов пути
    for (let i = 0; i < segmentsCount; i++) {
      // Рисуем паровозики, если маршрут проложен
      if (this.isRouteLaid) {
        const segmentCenterX = currentX + segmentDX / 2
        const segmentCenterY = currentY + segmentDY / 2

        const angle = Math.atan2(dY, dX)
        renderTrain(ctx, { x: segmentCenterX, y: segmentCenterY }, angle)
      }

      const segmentEndX = currentX + segmentDX
      const segmentEndY = currentY + segmentDY

      ctx.lineTo(segmentEndX, segmentEndY)

      currentX = segmentEndX + gapDX
      currentY = segmentEndY + gapDY

      ctx.moveTo(currentX, currentY)
    }

    ctx.strokeStyle = this.props.color
    ctx.lineWidth = gameSetup.route.width
    ctx.stroke()
    ctx.closePath()
  }

  changeColor(color: string) {
    this.props.color = color
    if (this.ctx && this.canvas) {
      this.draw(this.ctx, this.canvas)
    }
  }

  isMouseOnRoute(mouseX: number, mouseY: number) {
    const { x1, y1, x2, y2 } = this.props

    const distance = getDistanceToLine(mouseX, mouseY, x1, y1, x2, y2)

    return distance <= gameSetup.route.hoverDistance
  }

  onHover(mouseX: number, mouseY: number) {
    if (!this.canvas) return

    if (this.isMouseOnRoute(mouseX, mouseY) && !this.isRouteLaid) {
      if (!this.isMouseover) {
        this.isMouseover = true
        this.changeColor(gameSetup.route.hoverColor)

        this.canvas.style.cursor = 'pointer'
      }
    } else if (this.isMouseover) {
      this.isMouseover = false
      this.changeColor(colors.game[this.props.paths[0]])

      this.canvas.style.cursor = 'default'
    }
  }

  onClick(mouseX: number, mouseY: number) {
    if (this.isMouseOnRoute(mouseX, mouseY)) {
      if (!this.isRouteLaid && this.ctx && this.canvas) {
        this.isRouteLaid = true
        this.draw(this.ctx, this.canvas)
      }
    }
  }
}
