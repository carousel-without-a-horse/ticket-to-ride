import { HomeScreen } from './ui'

import type { Meta } from '@storybook/react'

const meta: Meta<typeof HomeScreen> = {
  title: 'MenuScreens/HomeScreen',
  component: HomeScreen,
}

export default meta

// eslint-disable-next-line @typescript-eslint/no-empty-function
const mockFunction = () => {}

export const Index = () => (
  <HomeScreen onStartGameButtonClicked={mockFunction} />
)
