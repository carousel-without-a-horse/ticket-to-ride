import { IconTrain } from '@/shared/images/game'

export const renderTrain = (ctx: CanvasRenderingContext2D, angle: number) => {
  const img = new Image()
  img.src = IconTrain
  img.onload = () => {
    // Сохраняем состояние контекста рисования
    ctx.save()

    // Поворачиваем контекст на 30 градусов
    ctx.translate(20, 20)
    // ctx.rotate((30 * Math.PI) / 180)
    ctx.rotate(angle)

    // Рисуем прямоугольник с border radius 2px
    ctx.beginPath()
    ctx.moveTo(2, 0)
    ctx.lineTo(18, 0)
    ctx.arcTo(20, 0, 20, 2, 2)
    ctx.lineTo(20, 10)
    ctx.arcTo(20, 12, 18, 12, 2)
    ctx.lineTo(2, 12)
    ctx.arcTo(0, 12, 0, 10, 2)
    ctx.lineTo(0, 2)
    ctx.arcTo(0, 0, 2, 0, 2)
    ctx.closePath()
    ctx.fillStyle = 'red'
    ctx.fill()

    ctx.drawImage(img, 2, 2, 16, 8)

    // const svg = new Path2D(IconTrain)
    // ctx.fill(svg)

    // Добавляем картинку внутри прямоугольника

    // Восстанавливаем состояние контекста рисования
    ctx.restore()
  }
}
