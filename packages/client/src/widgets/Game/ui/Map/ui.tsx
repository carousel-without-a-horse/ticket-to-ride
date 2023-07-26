import { useEffect, useRef } from 'react'

import { City } from '@/entities/Game/City'
import { Route } from '@/entities/Game/Route/Route'

import { cities } from '../../../../entities/Game/data/cities'
import { routes } from '../../../../entities/Game/data/routes'

export const Map = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const citiesElements = useRef(
    Object.entries(cities).map(([name, { x, y }]) => new City({ name, x, y }))
  )

  const routesElements = useRef(
    Object.entries(routes).map(
      ([name, route]) =>
        new Route({
          ...route,
          name,
        })
    )
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Рисуем города
    citiesElements.current.forEach(city => city.draw(ctx))

    // Рисуем маршруты
    routesElements.current.forEach(route => route.draw(ctx, canvas))

    const mouseMoveHandler = (event: MouseEvent) => {
      // Получаем координаты курсора мыши
      const mouseX = event.clientX - canvas.offsetLeft
      const mouseY = event.clientY - canvas.offsetTop

      citiesElements.current.forEach(city => city.onHover(mouseX, mouseY))

      routesElements.current.forEach(route => route.onHover(mouseX, mouseY))
    }

    const clickHandler = (event: MouseEvent) => {
      // Получаем координаты курсора мыши
      const mouseX = event.clientX - canvas.offsetLeft
      const mouseY = event.clientY - canvas.offsetTop

      routesElements.current.forEach(route => route.onClick(mouseX, mouseY))
    }

    canvas.addEventListener('mousemove', mouseMoveHandler)

    canvas.addEventListener('click', clickHandler)
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler)
      document.removeEventListener('click', clickHandler)
    }
  }, [])

  return <canvas ref={canvasRef} width={1000} height={630} />
}
