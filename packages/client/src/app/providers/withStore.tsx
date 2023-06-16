import { store, StoreContext } from '@/shared/store'

import type { ReactNode } from 'react'

export const withStore = (component: () => ReactNode) => () => {
  return (
    <StoreContext.Provider value={store}>{component()}</StoreContext.Provider>
  )
}
