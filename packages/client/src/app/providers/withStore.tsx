import type { ReactNode } from 'react'
import { store, StoreContext } from '@/shared/store'

export const withStore = (component: () => ReactNode) => () => {
  return (
    <StoreContext.Provider value={store}>{component()}</StoreContext.Provider>
  )
}
