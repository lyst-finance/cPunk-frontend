import { useCallback, useEffect, useRef } from 'react'

export const useClickOutsideListenerRef = (closeToggle: () => void) => {
  const ref = useRef(null)
  const escapeListener = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeToggle()
    }
  }, [closeToggle])

  const clickListener = useCallback(
    (e: MouseEvent) => {
      if ( ref && ref.current && !(ref.current! as any).contains(e.target)) {
        closeToggle?.()
      } else {
        return
      }
    },
    // eslint-disable-next-line
    [ref.current],
  )
  useEffect(() => {
    document.addEventListener('click', clickListener)
    document.addEventListener('keyup', escapeListener)
    return () => {
      document.removeEventListener('click', clickListener)
      document.removeEventListener('keyup', escapeListener)
    }
  }, [clickListener, escapeListener])
  return ref
}
