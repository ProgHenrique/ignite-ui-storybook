import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Root, {})
export const TooltipContent = styled(Tooltip.Content, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 5,
  padding: '$3 $4',
  letterSpacing: -0.09,
  fontFamily: '$default',
  backgroundColor: '$gray900',
  color: '$gray100',
  fontSize: '$sm',
  lineHeight: '$short',
  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',
})

export const ElementToTooltip = styled('div', {
  fontFamily: '$default',
  borderRadius: 8,
  padding: '$3 $4',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray100',
  backgroundColor: '$gray500',
  cursor: 'default',
})
