import { useCallback, useEffect, useRef } from 'react'

export type TUseTimeoutFnReturn = [() => boolean | null, () => void, () => void]

export function useTimeoutFn(
  // eslint-disable-next-line @typescript-eslint/ban-types
  fn: Function,
  ms = 0
): TUseTimeoutFnReturn {
  const ready = useRef<boolean | null>(false)
  const timeout = useRef<ReturnType<typeof setTimeout>>()
  const callback = useRef(fn)

  const isReady = useCallback(() => ready.current, [])

  const set = useCallback(() => {
    ready.current = false
    timeout.current && clearTimeout(timeout.current)

    timeout.current = setTimeout(() => {
      ready.current = true
      callback.current()
    }, ms)
  }, [ms])

  const clear = useCallback(() => {
    ready.current = null
    timeout.current && clearTimeout(timeout.current)
  }, [])

  // update ref when function changes
  useEffect(() => {
    callback.current = fn
  }, [fn])

  // set on mount, clear on unmount
  useEffect(() => {
    set()

    return clear
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ms])

  return [isReady, clear, set]
}
