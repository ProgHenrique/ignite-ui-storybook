import type { StoryObj, Meta } from '@storybook/react'
import { ToolTip, TooltipProps } from '@henrique-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: ToolTip,

  args: {},
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
