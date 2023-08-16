import { assign, choose, createMachine, sendParent } from 'xstate'

import { getTargetCoords } from '@/widgets/Arcade/utils/getTargetCoords'
import { isCoordsOnGrid } from '@/widgets/Arcade/utils/isCoordsOnGrid'

import {
  PLAYER_START_COORDS,
  PLAYER_STARTING_HEALTH,
} from '../../utils/settings'

import type { TPlayerMoved } from '@/widgets/Arcade/machines/gameMachine/types'
import type { TPlayerEvent, TPlayerContext, TPlayerState } from './types'

export const playerMachine = createMachine<
  TPlayerContext,
  TPlayerEvent,
  TPlayerState
>(
  {
    context: {
      coords: PLAYER_START_COORDS,
      health: PLAYER_STARTING_HEALTH,
    },
    id: 'player',
    initial: 'alive',
    states: {
      alive: {
        on: {
          ARROW_BUTTON_CLICKED: {
            actions: 'onArrowButtonClicked',
          },
          RESET_PLAYER_COORDS: {
            actions: 'resetCoords',
          },
          ATTACK_PLAYER: {
            actions: 'reduceHealth',
            target: 'determine',
          },
        },
      },
      dead: {
        entry: 'broadcastPlayerDied',
      },
      determine: {
        always: [
          {
            cond: 'isHealthZero',
            target: 'dead',
          },
          {
            target: 'alive',
          },
        ],
      },
    },
  },
  {
    actions: {
      onArrowButtonClicked: choose([
        {
          cond: 'isSquareAvailable',
          actions: ['move', 'broadcastPlayerMoved'],
        },
      ]),
      move: assign((context, event) => {
        const { coords } = context
        if (event.type !== 'ARROW_BUTTON_CLICKED') return { coords }

        const targetCoords = getTargetCoords({
          coords,
          direction: event.direction,
        })

        return {
          coords: targetCoords,
        }
      }),
      broadcastPlayerMoved: sendParent(context => {
        const { coords } = context
        const event: TPlayerMoved = {
          type: 'PLAYER_MOVED',
          coords,
        }
        return event
      }),
      resetCoords: assign(() => ({
        coords: PLAYER_START_COORDS,
      })),
      reduceHealth: assign(context => ({
        health: context.health - 1,
      })),
      broadcastPlayerDied: sendParent('PLAYER_DIED'),
    },
    guards: {
      isSquareAvailable: (context, event) => {
        const { coords } = context
        if (event.type !== 'ARROW_BUTTON_CLICKED') return false

        const targetCoords = getTargetCoords({
          coords,
          direction: event.direction,
        })

        return isCoordsOnGrid(targetCoords)
      },
      isHealthZero: context => {
        return context.health === 0
      },
    },
  }
)
