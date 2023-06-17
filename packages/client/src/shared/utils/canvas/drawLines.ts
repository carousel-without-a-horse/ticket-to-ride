interface IExtremePoints {
  x1: number
  y1: number
  x2: number
  y2: number
}

export const drawLines = (
  ctx: CanvasRenderingContext2D,
  lines: IExtremePoints[]
) => {
  lines.forEach(line => {
    ctx.beginPath()
    ctx.moveTo(line.x1, line.y1)
    ctx.lineTo(line.x2, line.y2)
    ctx.stroke()
    ctx.closePath()
  })
}
