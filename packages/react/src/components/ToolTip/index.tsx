import * as Tooltip from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import { ElementToTooltip, TooltipContainer, TooltipContent } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {}

export function ToolTip(props: TooltipProps) {
  return (
    <Tooltip.Provider>
      <TooltipContainer>
        <Tooltip.Trigger asChild>
          <ElementToTooltip>ToolTip</ElementToTooltip>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <TooltipContent sideOffset={3} {...props}>
            <Tooltip.Arrow />
            Tooltip content text
          </TooltipContent>
        </Tooltip.Portal>
      </TooltipContainer>
    </Tooltip.Provider>
  )
}

ToolTip.displayName = 'ToolTip'
