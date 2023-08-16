import type { TCoords } from '@/widgets/Arcade/types'

type TStartButtonClicked = {
  type: 'START_BUTTON_CLICKED'
}

type TPlayerDied = {
  type: 'PLAYER_DIED'
}

type TPlayerGotTreasure = {
  type: 'PLAYER_GOT_TREASURE'
}

type TRestartButtonClicked = {
  type: 'RESTART_BUTTON_CLICKED'
}

type THomeButtonClicked = {
  type: 'HOME_BUTTON_CLICKED'
}

type TPlayerWalkedThroughDoor = {
  type: 'PLAYER_WALKED_THROUGH_DOOR'
}

export type TPlayerMoved = {
  type: 'PLAYER_MOVED'
  coords: TCoords
}

export type TAttackPlayer = {
  type: 'ATTACK_PLAYER'
}

export type TResetLevel = {
  type: 'RESET_LEVEL'
}

export type TGameEvent =
  | TStartButtonClicked
  | TPlayerDied
  | TPlayerGotTreasure
  | TRestartButtonClicked
  | THomeButtonClicked
  | TPlayerWalkedThroughDoor
  | TPlayerMoved
  | TAttackPlayer
  | TResetLevel

export type TGameState = {
  context: null
  value:
    | 'home'
    | 'playing'
    | 'playing.level1'
    | 'playing.level2'
    | 'playing.level3'
    | 'playing.level4'
    | 'gameOver'
    | 'gameComplete'
}
