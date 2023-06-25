import type { TCityKey } from './cities'

type TRouteCards = Record<string, { cities: TCityKey[]; points: number }>

export type TRouteCardKey = keyof typeof routeCards

export const routeCards: TRouteCards = {
  'Palermo-Moskva': {
    cities: ['Palermo', 'Moskva'],
    points: 20,
  },
}
