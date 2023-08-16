import { useEffect } from 'react'

import type { TUsePlayerControls } from './types'

export const usePlayerControls = ({
  handleArrowUp,
  handleArrowDown,
  handleArrowLeft,
  handleArrowRight,
}: TUsePlayerControls) => {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'ArrowUp':
          handleArrowUp()
          break
        case 'ArrowDown':
          handleArrowDown()
          break
        case 'ArrowLeft':
          handleArrowLeft()
          break
        case 'ArrowRight':
          handleArrowRight()
          break
      }
    }
    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [handleArrowDown, handleArrowLeft, handleArrowRight, handleArrowUp])
}
