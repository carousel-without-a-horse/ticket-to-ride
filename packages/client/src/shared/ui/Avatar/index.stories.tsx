import { UserOutlined } from '@ant-design/icons'

import { Avatar } from './'

import type { StoryObj, Meta } from '@storybook/react'

const iconUser = <UserOutlined rev={undefined} />

const meta = {
  title: 'Ui/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Avatar>

export default meta

type TStory = StoryObj<typeof meta>
export const Default: TStory = {
  args: {
    icon: iconUser,
    size: 'default',
  },
}
export const Small: TStory = {
  args: {
    icon: iconUser,
    size: 'small',
  },
}

export const Size250: TStory = {
  args: {
    icon: iconUser,
    size: 250,
  },
}
