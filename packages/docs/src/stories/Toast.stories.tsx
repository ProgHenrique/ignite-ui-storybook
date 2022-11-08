import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@henrique-ignite-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,

  args: {},
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
