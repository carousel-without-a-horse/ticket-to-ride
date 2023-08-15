import type { TGameEvent } from '../../../machines/gameMachine/types'

export const fastForwardToLevel1Events: TGameEvent[] = [
  {
    type: 'START_BUTTON_CLICKED',
  },
]

export const fastForwardToLevel2Events: TGameEvent[] = [
  ...fastForwardToLevel1Events,
  {
    type: 'PLAYER_WALKED_THROUGH_DOOR',
  },
]

export const fastForwardToLevel3Events: TGameEvent[] = [
  ...fastForwardToLevel2Events,
  {
    type: 'PLAYER_WALKED_THROUGH_DOOR',
  },
]

export const fastForwardToGameCompleteEvents: TGameEvent[] = [
  ...fastForwardToLevel3Events,
  {
    type: 'PLAYER_GOT_TREASURE',
  },
]

export const fastForwardToGameOverEvents: TGameEvent[] = [
  ...fastForwardToLevel1Events,
  {
    type: 'PLAYER_DIED',
  },
]
