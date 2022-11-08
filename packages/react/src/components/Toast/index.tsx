import { X } from 'phosphor-react'
import { ComponentProps, useState } from 'react'
import {
  Button,
  Provider,
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastTitle,
  Viewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {}

export function Toast() {
  const [open, setOpen] = useState(false)
  return (
    <Provider swipeDirection="right">
      <Button
        onClick={() => {
          setOpen(true)
        }}
      >
        Open Toast
      </Button>
      <ToastContainer open={open} onOpenChange={setOpen} duration={2000}>
        <ToastTitle>Toast functionality</ToastTitle>
        <ToastDescription>Toast open with success</ToastDescription>
        <ToastClose>
          <X weight="bold" />
        </ToastClose>
      </ToastContainer>

      <Viewport />
    </Provider>
  )
}

Toast.displayName = 'Toast'
