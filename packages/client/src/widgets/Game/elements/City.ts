import { colors } from '@/app/providers/colors'
import { IconCity } from '@/shared/images/game'
import { gameSetup } from '../gameSetup'

interface IProps {
  x: number
  y: number
  name: string
  radius?: number
  color?: string
}

class City {
  props: Required<IProps>
  mouseover = false
  ctx?: CanvasRenderingContext2D

  constructor(props: IProps) {
    this.props = {
      ...props,
      radius: props.radius || gameSetup.city.radius,
      color: props.color || colors.game.gray,
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

      // ctx.clearRect(x - radius - 2, y - radius - 2, radius * 2 + 4, radius * 2 + 4)

      ctx.beginPath()
      ctx.arc(x, y, radius, 0, 2 * Math.PI)
      ctx.fillStyle = this.props.color
      ctx.lineWidth = 1
      ctx.strokeStyle = colors.game.black
      // ctx.shadowColor = 'rgba(0, 0, 0, 0.96)' // цвет тени
      // ctx.shadowOffsetX = 0 // смещение тени по оси X
      // ctx.shadowOffsetY = 0 // смещение тени по оси Y
      // ctx.shadowBlur = 2 // радиус размытия тени
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
      if (!this.mouseover) {
        this.mouseover = true
        this.changeColor(colors.game.red)

        console.log('Hover city:', this.props.name)
      }
    } else if (this.mouseover) {
      this.mouseover = false
      this.changeColor(colors.game.gray)
    }
  }
}

export default City
