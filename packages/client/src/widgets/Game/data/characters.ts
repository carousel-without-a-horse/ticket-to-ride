import { colors } from '@/app/providers/colors'
// import {
//   IconBanana,
//   IconBroccoli,
//   IconCherry,
//   IconGrape,
// } from '@/shared/images/game'

export const characters = {
  banana: {
    color: colors.game.greenLight,
    bgColor: colors.game.yellow,
    icon: 'IconBanana',
    name: 'Banana',
  },
  grape: {
    color: colors.game.pink,
    bgColor: colors.game.blue,
    icon: 'IconGrape',
    name: 'Grape',
  },
  broccoli: {
    color: colors.game.purpleMedium,
    bgColor: colors.game.green,
    icon: 'IconBroccoli',
    name: 'Broccoli',
  },
  cherry: {
    color: colors.game.cyan,
    bgColor: colors.game.red,
    icon: 'IconCherry',
    name: 'Cherry',
  },
}
