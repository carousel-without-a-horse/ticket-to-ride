import { forwardRef, lazy, memo, Suspense } from 'react'

import type { ComponentType, ReactElement } from 'react'

export const withSuspense = (
  lazyComponent: () => Promise<{ default: ComponentType<any> }>,
  loader: ReactElement | null = null
) => {
  const LazyComponent = lazy(lazyComponent)

  return memo(
    forwardRef((props, ref) => (
      <Suspense fallback={loader}>
        <LazyComponent ref={ref} {...props} />
      </Suspense>
    ))
  )
}
