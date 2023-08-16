import { choose, createMachine, forwardTo, send } from 'xstate'

import { isEqualCoords } from '@/widgets/Arcade/utils/isEqualCoords'
import { DOOR_COORDS, TREASURE_COORDS } from '@/widgets/Arcade/utils/settings'
import { monsterMachine } from '@/widgets/Arcade/machines/monsterMachine'
import { coinMachine } from '@/widgets/Arcade/machines/coinMachine'

import { playerMachine } from '../playerMachine'

import type { TGameState, TGameEvent } from './types'

export const gameMachine = createMachine<null, TGameEvent, TGameState>(
  {
    id: 'game',
    initial: 'home',
    states: {
      home: {
        on: {
          START_BUTTON_CLICKED: 'playing',
        },
      },
      playing: {
        invoke: [
          {
            id: 'playerActor',
            src: playerMachine,
          },
          {
            id: 'coinsActor',
            src: coinMachine,
          },
          {
            id: 'monsterActor',
            src: monsterMachine,
          },
          {
            id: 'monsterActor2',
            src: monsterMachine,
          },
        ],
        on: {
          PLAYER_DIED: 'gameOver',
          PLAYER_GOT_TREASURE: 'gameComplete',
          PLAYER_MOVED: {
            actions: ['onPlayerMoved', 'forwardToCoin'],
          },
          ATTACK_PLAYER: {
            actions: 'forwardToPlayer',
          },
          RESET_LEVEL: {
            actions: [
              'resetPlayerCoords',
              'forwardToCoin',
              'forwardToMonster',
              'forwardToMonster2',
            ],
          },
        },
        initial: 'level1',
        states: {
          level1: {
            on: {
              PLAYER_WALKED_THROUGH_DOOR: 'level2',
            },
          },
          level2: {
            entry: 'resetLevel',
            on: {
              PLAYER_WALKED_THROUGH_DOOR: 'level3',
            },
          },
          level3: {
            entry: 'resetLevel',
            on: {
              PLAYER_WALKED_THROUGH_DOOR: 'level4',
            },
          },
          level4: {
            entry: 'resetLevel',
            on: {
              PLAYER_MOVED: {
                actions: ['onPlayerMovedOnFinalLevel', 'forwardToCoin'],
              },
            },
          },
        },
      },
      gameOver: {
        on: {
          RESTART_BUTTON_CLICKED: 'playing',
        },
      },
      gameComplete: {
        on: {
          HOME_BUTTON_CLICKED: 'home',
        },
      },
    },
  },
  {
    actions: {
      onPlayerMoved: choose([
        {
          cond: 'isPlayerAtDoor',
          actions: 'playerWalkedThroughDoor',
        },
        {
          cond: 'isMonster',
          actions: ['forwardToMonster', 'forwardToMonster2'],
        },
      ]),
      playerWalkedThroughDoor: send('PLAYER_WALKED_THROUGH_DOOR'),
      resetLevel: send('RESET_LEVEL'),
      resetPlayerCoords: send('RESET_PLAYER_COORDS', {
        to: 'playerActor',
      }),
      onPlayerMovedOnFinalLevel: choose([
        {
          cond: 'isPlayerGotTreasure',
          actions: 'playerGotTreasure',
        },
      ]),
      playerGotTreasure: send('PLAYER_GOT_TREASURE'),
      forwardToMonster: forwardTo('monsterActor'),
      forwardToMonster2: forwardTo('monsterActor2'),
      forwardToCoin: forwardTo('coinsActor'),
      forwardToPlayer: forwardTo('playerActor'),
    },
    guards: {
      isPlayerAtDoor: (context, event) => {
        if (event.type !== 'PLAYER_MOVED') return false
        const { coords } = event

        return isEqualCoords(coords, DOOR_COORDS)
      },
      isPlayerGotTreasure: (context, event) => {
        if (event.type !== 'PLAYER_MOVED') return false
        const { coords } = event

        return isEqualCoords(coords, TREASURE_COORDS)
      },
      isMonster: (_context, _event, condMeta) =>
        !!condMeta.state.children.monsterActor,
      isCoin: (_context, _event, condMeta) =>
        !!condMeta.state.children.coinsActor,
    },
  }
)
