import type { TPlayerMoved, TResetLevel } from '../gameMachine/types'
import type { ActorRef } from 'xstate'
import type { TCoords } from '../../types'

export type TCoinContext = {
  coinsCoords: TCoords[]
  playerCoords?: TCoords
  score: number
}

export type TCoinEvent = TPlayerMoved | TResetLevel

export type TCoinState = {
  context: TCoinContext
  value: 'ok'
}

export type TCoinActor = ActorRef<TCoinEvent, TCoinState>
