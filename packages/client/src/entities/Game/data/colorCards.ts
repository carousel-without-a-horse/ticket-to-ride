import { colors } from '@/shared/constants/colors'

export type TColorCardType =
  | 'black'
  | 'blue'
  | 'green'
  | 'orange'
  | 'purple'
  | 'rainbow'
  | 'red'
  | 'white'
  | 'yellow'

export type TColorCard = {
  type: TColorCardType
  color: string
}

export const colorCards: TColorCard[] = [
  {
    type: 'black',
    color: colors.black,
  },
  {
    type: 'blue',
    color: colors.blue,
  },
  {
    type: 'green',
    color: colors.green,
  },
  {
    type: 'orange',
    color: colors.orange,
  },
  {
    type: 'purple',
    color: colors.purple,
  },
  {
    type: 'rainbow',
    color: colors.black,
  },
  {
    type: 'red',
    color: colors.red,
  },
  {
    type: 'white',
    color: colors.white,
  },
  {
    type: 'yellow',
    color: colors.yellow,
  },
]
