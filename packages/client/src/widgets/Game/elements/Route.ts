import { colors } from '@/app/providers/colors'

import getRouteCoords from '../getRouteCoords'
import { gameSetup } from '../gameSetup'

import type { IRoute } from '../routes'
import getDistanceToLine from '../getDistanceToLine'

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

class Route {
  props: Required<IProps>
  mouseover = false
  canvas?: HTMLCanvasElement
  ctx?: CanvasRenderingContext2D

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

    const x1 = this.props.x1
    const y1 = this.props.y1
    const x2 = this.props.x2
    const y2 = this.props.y2

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

    // if (this.mouseover) {
    //   const endX = x2 - gapDX
    //   const endY = y2 - gapDY

    //   ctx.lineTo(endX, endY)
    // } else {
    // Рисование сегментов пути
    for (let i = 0; i < segmentsCount; i++) {
      const segmentEndX = currentX + segmentDX
      const segmentEndY = currentY + segmentDY

      ctx.lineTo(segmentEndX, segmentEndY)

      currentX = segmentEndX + gapDX
      currentY = segmentEndY + gapDY

      ctx.moveTo(currentX, currentY)
    }
    // }

    ctx.strokeStyle = this.props.color
    ctx.lineWidth = gameSetup.route.width
    ctx.stroke()
    ctx.closePath()
  }

  changeColor(color: string) {
    this.props.color = color
    if (this.ctx && this.canvas) this.draw(this.ctx, this.canvas)
  }

  onHover(mouseX: number, mouseY: number) {
    const x1 = this.props.x1
    const y1 = this.props.y1
    const x2 = this.props.x2
    const y2 = this.props.y2

    const distance = getDistanceToLine(mouseX, mouseY, x1, y1, x2, y2)

    if (distance <= gameSetup.route.hoverDistance) {
      if (!this.mouseover) {
        this.mouseover = true
        this.changeColor(colors.game.black)

        if (this.canvas) this.canvas.style.cursor = 'pointer'
      }
    } else if (this.mouseover) {
      this.mouseover = false
      this.changeColor(colors.game[this.props.paths[0]])

      if (this.canvas) this.canvas.style.cursor = 'default'
    }
  }
}

export default Route
