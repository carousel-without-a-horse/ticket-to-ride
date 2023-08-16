import type { TAttackPlayer } from '../gameMachine/types'
import type { DirectionType, TCoords } from '../../types'
import type { ActorRef } from 'xstate'

export type TArrowButtonClicked = {
  type: 'ARROW_BUTTON_CLICKED'
  direction: DirectionType
}

export type TResetPlayerCoords = {
  type: 'RESET_PLAYER_COORDS'
}

export type TPlayerEvent =
  | TArrowButtonClicked
  | TResetPlayerCoords
  | TAttackPlayer

export type TPlayerContext = {
  coords: TCoords
  health: number
}

export type TPlayerState = {
  context: TPlayerContext
  value: 'alive' | 'died' | 'determine'
}

export type TPlayerActor = ActorRef<any, TPlayerState>
