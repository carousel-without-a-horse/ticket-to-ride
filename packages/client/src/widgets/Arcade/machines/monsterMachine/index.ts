import { assign, choose, createMachine, send, sendParent } from 'xstate'

import { isEqualCoords } from '@/widgets/Arcade/utils/isEqualCoords'
import { getRandomUpDownCoords } from '@/widgets/Arcade/utils/getRandomUpDownCoords'

import type { TMonsterEvent, TMonsterContext, TMonsterState } from './types'

export const monsterMachine = createMachine<
  TMonsterContext,
  TMonsterEvent,
  TMonsterState
>(
  {
    context: {
      wayCoords: undefined,
      coords: undefined,
      playerCoords: undefined,
    },
    id: 'monster',
    initial: 'init',
    on: {
      PLAYER_MOVED: {
        actions: ['storePlayerCoords', 'attemptAttack'],
      },
      MONSTER_READY: 'up',
      RESET_LEVEL: {
        actions: 'updateCoords',
      },
    },
    states: {
      init: {
        entry: ['updateCoords', 'start'],
      },
      up: {
        entry: 'attemptAttack',
        after: {
          2000: {
            target: 'down',
            actions: 'moveDown',
          },
        },
      },
      down: {
        entry: 'attemptAttack',
        after: {
          2000: {
            target: 'up',
            actions: 'moveUp',
          },
        },
      },
    },
  },
  {
    actions: {
      updateCoords: assign(() => {
        const wayCoords = getRandomUpDownCoords()
        return {
          wayCoords,
          coords: wayCoords[0],
        }
      }),
      start: send('MONSTER_READY'),
      moveDown: assign(context => ({
        coords: context.wayCoords![1],
      })),
      moveUp: assign(context => ({
        coords: context.wayCoords![0],
      })),
      storePlayerCoords: assign((context, event) => {
        if (event.type !== 'PLAYER_MOVED') return context
        return {
          playerCoords: event.coords,
        }
      }),
      attemptAttack: choose([
        {
          cond: 'isMonsterAndPlayerCoordsEqual',
          actions: 'attack',
        },
      ]),
      attack: sendParent('ATTACK_PLAYER'),
    },
    guards: {
      isMonsterAndPlayerCoordsEqual: context => {
        if (!context.playerCoords || !context.coords) return false
        return isEqualCoords(context.coords, context.playerCoords)
      },
    },
  }
)
