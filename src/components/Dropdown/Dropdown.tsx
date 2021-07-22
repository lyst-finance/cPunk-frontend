import React from 'react'
import { useClickOutsideListenerRef } from './hook/useClickOutsideListenerRef'

export interface IDialogProps {
  closeToggle: () => void
}

export const Dropdown: React.FC<IDialogProps> = (props) => {
  const { closeToggle, children } = props
  const ref = useClickOutsideListenerRef(closeToggle)
  return <div ref={ref}>{children}</div>
}

export default Dropdown
