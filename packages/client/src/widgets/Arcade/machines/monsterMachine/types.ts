import type { TResetLevel, TPlayerMoved } from '../gameMachine/types'
import type { ActorRef } from 'xstate'
import type { TCoords } from '../../types'

export type TMonsterContext = {
  coords?: TCoords
  wayCoords?: TCoords[]
  playerCoords?: TCoords
}
export type TMonsterReady = {
  type: 'MONSTER_READY'
}
export type TMonsterEvent = TPlayerMoved | TMonsterReady | TResetLevel

export type TMonsterState = {
  context: TMonsterContext
  value: 'up' | 'down'
}

export type TMonsterActor = ActorRef<TMonsterEvent, TMonsterState>
