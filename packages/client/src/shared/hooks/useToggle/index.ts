import { useCallback, useState } from 'react'
import type { TUseToggle, TToggleFunc } from './types'

export const useToggle: TUseToggle = defaultState => {
  const [state, setState] = useState<boolean>(defaultState)

  const setTrue = useCallback<TToggleFunc>(() => {
    setState(true)
  }, [])

  const setFalse = useCallback<TToggleFunc>(() => {
    setState(false)
  }, [])

  const toggle = useCallback<TToggleFunc>(() => {
    setState(value => !value)
  }, [])

  return { state, toggle, setTrue, setFalse }
}
