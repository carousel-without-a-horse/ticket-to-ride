import { useEffect, useReducer, useRef } from 'react'
import { cities } from './cities'
import { gameSetup } from './gameSetup'
import { routes } from './routes'
import { renderTrain } from './renderTrain'
import City from './elements/City'
import Route from './elements/Route'

// const initialState = {
//   routes
// }

// const reducer = (state: typeof initialState, action) => {
//   switch (action.type) {
//     case 'highLightRoute':
//       return {
//         ...state,
//         routes: {
//           ...routes,
//           routes[action.payload.routeName]: action.payload.routeBody
//         }
//       }

//     default:
//       break;
//   }
// }

export const Game = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const citiesElements = useRef(
    Object.entries(cities).map(
      ([name, coords]) =>
        new City({
          name,
          x: coords.x,
          y: coords.y,
        })
    )
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

  // const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const canvas = canvasRef.current

    if (canvas) {
      const ctx = canvas.getContext('2d')

      if (ctx) {
        // Рисуем города
        citiesElements.current.forEach(city => city.draw(ctx))

        // Рисуем маршруты
        routesElements.current.forEach(route => route.draw(ctx, canvas))
      }

      canvas.addEventListener('mousemove', event => {
        // Получаем координаты курсора мыши
        const mouseX = event.clientX - canvas.offsetLeft
        const mouseY = event.clientY - canvas.offsetTop

        citiesElements.current.forEach(city => city.onHover(mouseX, mouseY))

        routesElements.current.forEach(route => route.onHover(mouseX, mouseY))
      })
    }
  }, [])

  return <canvas ref={canvasRef} width={1000} height={630} />
}
