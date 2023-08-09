import { useEffect } from 'react'

import { useTimeoutFn } from '../useTimeoutFn'

import type { DependencyList } from 'react'

export type TUseDebounceReturn = [() => boolean | null, () => void]

export function useDebounce(
  // eslint-disable-next-line @typescript-eslint/ban-types
  fn: Function,
  ms = 0,
  deps: DependencyList = []
): TUseDebounceReturn {
  const [isReady, cancel, reset] = useTimeoutFn(fn, ms)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(reset, deps)

  return [isReady, cancel]
}
