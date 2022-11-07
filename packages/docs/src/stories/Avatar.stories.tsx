import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@henrique-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/ProgHenrique.png',
    alt: 'Henrique Ramos',
  },

  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const withFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
