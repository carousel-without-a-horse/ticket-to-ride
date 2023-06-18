import { colors } from '@/shared/constants/colors'

export type TColorCardKey = keyof typeof colorCards

export const colorCards = {
  black: {
    color: colors.black,
  },
  blue: {
    color: colors.blue,
  },
  green: {
    color: colors.green,
  },
  orange: {
    color: colors.orange,
  },
  purple: {
    color: colors.purple,
  },
  rainbow: {
    color: colors.black,
  },
  red: {
    color: colors.red,
  },
  white: {
    color: colors.white,
  },
  yellow: {
    color: colors.yellow,
  },
}
