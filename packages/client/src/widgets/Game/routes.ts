import type { TGameColors } from '@/app/providers/colors'
import type { TCityKey } from './cities'

export interface IRoute {
  length: number
  paths: TGameColors[]
  cities: TCityKey[]
}

export const routes: Record<string, IRoute> = {
  'Edinburgh-London': {
    length: 3,
    paths: ['orange', 'black'],
    cities: ['Edinburgh', 'London'],
  },
  'London-Dieppe': {
    length: 2,
    paths: ['gray', 'gray'],
    cities: ['London', 'Dieppe'],
  },
  'Dieppe-Brest': {
    length: 2,
    paths: ['orange'],
    cities: ['Dieppe', 'Brest'],
  },
  'Dieppe-Paris': {
    length: 1,
    paths: ['purple'],
    cities: ['Dieppe', 'Paris'],
  },
}
