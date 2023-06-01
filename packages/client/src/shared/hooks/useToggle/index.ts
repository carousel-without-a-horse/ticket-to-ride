import { useCallback, useState } from 'react'
import type { TUseToggle, TSetFalse, TSetTrue, TToggle } from './types'

export const useToggle: TUseToggle = defaultState => {
  const [state, setState] = useState<boolean>(defaultState)

  const setTrue = useCallback<TSetTrue>(() => {
    setState(true)
  }, [])

  const setFalse = useCallback<TSetFalse>(() => {
    setState(false)
  }, [])

  const toggle = useCallback<TToggle>(() => {
    setState(value => !value)
  }, [])

  return { state, toggle, setTrue, setFalse }
}
