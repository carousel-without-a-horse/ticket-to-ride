import { observer } from 'mobx-react-lite'

import { userStore } from '@/shared/store/user/userStore'

import type { PropsWithChildren, ReactNode } from 'react'

const InitialStateProvider = observer(({ children }: PropsWithChildren) => {
  if (typeof window !== 'undefined' && window.__INITIAL_STATE__) {
    userStore.setUser(window.__INITIAL_STATE__)
    delete window.__INITIAL_STATE__
  }

  return <>{children}</>
})
export const withInitialState = (component: () => ReactNode) => () =>
  <InitialStateProvider> {component()} </InitialStateProvider>
