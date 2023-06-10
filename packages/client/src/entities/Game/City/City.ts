import { colors } from '@/app/providers/colors'

import { gameSetup } from '@/widgets/Game/data/gameSetup'

import { IconCity } from '@/shared/images/game'

import type { IProps } from './types'

export class City {
  props: Required<IProps>
  isMouseover = false
  ctx?: CanvasRenderingContext2D

  constructor(props: IProps) {
    this.props = {
      radius: gameSetup.city.radius,
      color: colors.game.gray,
      ...props,
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx

    const img = new Image()
    img.src = IconCity
    img.onload = () => {
      const x = this.props.x
      const y = this.props.y
      const radius = this.props.radius
      const dx = x - radius / 2
      const dy = y - radius / 2

      ctx.beginPath()
      ctx.arc(x, y, radius, 0, 2 * Math.PI)
      ctx.fillStyle = this.props.color
      ctx.lineWidth = 1
      ctx.strokeStyle = colors.game.black
      ctx.fill()
      ctx.stroke()
      ctx.closePath()

      ctx.drawImage(img, dx, dy, radius, radius)
    }
  }

  changeColor(color: string) {
    this.props.color = color
    if (this.ctx) this.draw(this.ctx)
  }

  onHover(mouseX: number, mouseY: number) {
    const x = this.props.x
    const y = this.props.y
    const radius = this.props.radius

    const distance = Math.sqrt(
      Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2)
    )

    if (distance <= radius) {
      if (!this.isMouseover) {
        this.isMouseover = true
        this.changeColor(gameSetup.city.hoverColor)

        // TODO: отображать попап с названием города
        console.log('Hover city:', this.props.name)
      }
    } else if (this.isMouseover) {
      this.isMouseover = false
      this.changeColor(colors.game.gray)
    }
  }
}
