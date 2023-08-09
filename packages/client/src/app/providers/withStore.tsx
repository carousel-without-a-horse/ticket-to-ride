import { store, StoreContext } from '@/shared/store'

import type { ReactNode } from 'react'

export const withStore = (component: () => ReactNode) => () => {
  if (typeof window === 'undefined') {
    return <>{component()}</>
  }

  if (window.__INITIAL_STATE__) {
    store.setInitialData(window.__INITIAL_STATE__)
    delete window.__INITIAL_STATE__
  }

  return (
    <StoreContext.Provider value={store}>{component()}</StoreContext.Provider>
  )
}
