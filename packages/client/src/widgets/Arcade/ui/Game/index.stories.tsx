import { Game } from './ui'
import {
  fastForwardToLevel1Events,
  fastForwardToLevel2Events,
  fastForwardToLevel3Events,
  fastForwardToGameCompleteEvents,
  fastForwardToGameOverEvents,
} from './utils/fastForwardEvents'

import type { Meta } from '@storybook/react'

const meta: Meta<typeof Game> = {
  title: 'Game',
  component: Game,
}

export default meta

export const Index = () => <Game />

export const Level1 = () => (
  <Game fastForwardEvents={fastForwardToLevel1Events} />
)

export const Level2 = () => (
  <Game fastForwardEvents={fastForwardToLevel2Events} />
)

export const Level3 = () => (
  <Game fastForwardEvents={fastForwardToLevel3Events} />
)

export const GameComplete = () => (
  <Game fastForwardEvents={fastForwardToGameCompleteEvents} />
)

export const GameOver = () => (
  <Game fastForwardEvents={fastForwardToGameOverEvents} />
)
