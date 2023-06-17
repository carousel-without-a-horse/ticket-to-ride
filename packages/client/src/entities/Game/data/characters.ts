import { colors } from '@/shared/constants/colors'
import {
  IconBanana,
  IconBroccoli,
  IconCherry,
  IconGrape,
} from '@/shared/images/game'

export const characters = {
  banana: {
    color: colors.greenLight,
    bgColor: colors.yellow,
    icon: IconBanana,
    name: 'Banana',
  },
  grape: {
    color: colors.pink,
    bgColor: colors.blue,
    icon: IconGrape,
    name: 'Grape',
  },
  broccoli: {
    color: colors.purpleMedium,
    bgColor: colors.green,
    icon: IconBroccoli,
    name: 'Broccoli',
  },
  cherry: {
    color: colors.cyan,
    bgColor: colors.red,
    icon: IconCherry,
    name: 'Cherry',
  },
}
