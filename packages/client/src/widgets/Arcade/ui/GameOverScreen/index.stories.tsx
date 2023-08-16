import { GameOverScreen } from './ui'

import type { Meta } from '@storybook/react'

const meta: Meta<typeof GameOverScreen> = {
  title: 'MenuScreens/GameOverScreen',
  component: GameOverScreen,
}

export default meta

// eslint-disable-next-line @typescript-eslint/no-empty-function
const mockFunction = () => {}

export const Index = () => (
  <GameOverScreen onRestartButtonClicked={mockFunction} />
)
