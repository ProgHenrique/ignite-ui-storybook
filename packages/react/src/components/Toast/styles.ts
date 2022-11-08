import { keyframes, styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

export const Provider = styled(Toast.Provider, {})
export const Viewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: 25,
  gap: 10,
  width: '22.5rem',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})
const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${25}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${25}px))` },
})
export const ToastContainer = styled(Toast.Root, {
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '$3 $5',
  backgroundColor: '$gray800',
  borderRadius: 6,
  outline: '1px solid $gray600',
  outlineOffset: '-1px',
  width: '22.5rem',

  '&[data-state="open"]': {
    animation: `${slideIn} .15s cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} .1s ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform .2s ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} .1s ease-out`,
  },
})
export const ToastTitle = styled(Toast.Title, {
  fontFamily: '$default',
  fontWeight: 'bold',
  fontSize: '$xl',
  color: '$white',
  lineHeight: '$base',
})
export const ToastDescription = styled(Toast.Description, {
  fontFamily: '$default',
  fontWeight: 'regular',
  fontSize: '$sm',
  color: '$gray200',
  lineHeight: '$base',
})
export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  cursor: 'pointer',
  position: 'absolute',
  color: '$gray200',
  top: 16,
  right: 16,
})

export const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  color: '$gray100',
  fontFamily: '$default',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  backgroundColor: '$gray500',
  cursor: 'pointer',
})
