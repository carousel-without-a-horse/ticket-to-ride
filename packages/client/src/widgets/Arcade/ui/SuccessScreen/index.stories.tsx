import { SuccessScreen } from './ui'

import type { Meta } from '@storybook/react'

const meta: Meta<typeof SuccessScreen> = {
  title: 'MenuScreens/SuccessScreen',
  component: SuccessScreen,
}

export default meta

// eslint-disable-next-line @typescript-eslint/no-empty-function
const mockFunction = () => {}

export const Index = () => <SuccessScreen onResetButtonClicked={mockFunction} />
