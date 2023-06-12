import { gameSetup } from '@/widgets/Game/data/gameSetup'

import { IconTrain } from '@/shared/images/game'

export const renderTrain = (
  ctx: CanvasRenderingContext2D,
  { x, y }: { x: number; y: number },
  angle: number
): void => {
  const img = new Image()
  img.src = IconTrain
  img.onload = () => {
    ctx.save()

    ctx.translate(x, y)
    ctx.rotate(angle)

    const trainDX = gameSetup.train.width / 2
    const trainDY = gameSetup.train.height / 2
    const borderRadius = gameSetup.train.borderRadius

    // Рисуем прямоугольник с borderRadius
    ctx.beginPath()
    ctx.moveTo(-trainDX + borderRadius, -trainDY)
    ctx.lineTo(trainDX - borderRadius, -trainDY)
    ctx.arcTo(trainDX, -trainDY, trainDX, -trainDY + borderRadius, borderRadius)
    ctx.lineTo(trainDX, trainDY - borderRadius)
    ctx.arcTo(trainDX, trainDY, trainDX - borderRadius, trainDY, borderRadius)
    ctx.lineTo(-trainDX + borderRadius, trainDY)
    ctx.arcTo(-trainDX, trainDY, -trainDX, trainDY - borderRadius, borderRadius)
    ctx.lineTo(-trainDX, -trainDY + borderRadius)
    ctx.arcTo(
      -trainDX,
      -trainDY,
      -trainDX + borderRadius,
      -trainDY,
      borderRadius
    )
    ctx.closePath()
    // TODO: давать паровозику цвет игрока
    ctx.fillStyle = 'red'
    ctx.fill()

    // Рисуем картинку паровозика
    const { imgWidth, imgHeight } = gameSetup.train

    const imgDX = imgWidth / 2
    const imgDY = imgHeight / 2

    const trainImgDX = trainDX - imgDX
    const trainImgDY = trainDY - imgDY

    const imgX = -trainDX + trainImgDX
    const imgY = -trainDY + trainImgDY

    ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight)

    ctx.restore()
  }
}
