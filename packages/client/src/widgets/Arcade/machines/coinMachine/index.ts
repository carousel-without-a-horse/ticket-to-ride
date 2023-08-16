import { assign, choose, createMachine } from 'xstate'

import { isEqualCoords } from '../../utils/isEqualCoords'
import { COIN_VALUE } from '../../utils/settings'
import { getRandomCoords } from '../../utils/getRandomCoords'

import type { TCoinEvent, TCoinContext, TCoinState } from './types'

const randomCoins = getRandomCoords()
export const coinMachine = createMachine<TCoinContext, TCoinEvent, TCoinState>(
  {
    context: {
      coinsCoords: randomCoins,
      playerCoords: undefined,
      score: 0,
    },
    id: 'coins',
    initial: 'ok',
    states: {
      ok: {
        entry: 'resetCoinsCoords',
      },
    },
    on: {
      PLAYER_MOVED: {
        actions: ['storePlayerCoords', 'attemptCollectCoin'],
      },
      RESET_LEVEL: {
        actions: 'resetCoinsCoords',
      },
    },
  },
  {
    actions: {
      storePlayerCoords: assign((context, event) => {
        if (event.type !== 'PLAYER_MOVED') return context
        return {
          playerCoords: event.coords,
        }
      }),
      attemptCollectCoin: choose([
        {
          cond: 'isCoinAndPlayerCoordsEqual',
          actions: 'collectCoin',
        },
      ]),
      collectCoin: assign(context => {
        const coins = context.coinsCoords.filter(
          coinCoords => !isEqualCoords(coinCoords, context.playerCoords!)
        )
        return {
          coinsCoords: coins,
          score: context.score + COIN_VALUE,
        }
      }),
      resetCoinsCoords: assign(() => ({
        coinsCoords: getRandomCoords(),
      })),
    },
    guards: {
      isCoinAndPlayerCoordsEqual: context => {
        const { playerCoords } = context
        if (!playerCoords) return false
        return context.coinsCoords.some(coinCoords =>
          isEqualCoords(coinCoords, playerCoords)
        )
      },
    },
  }
)
