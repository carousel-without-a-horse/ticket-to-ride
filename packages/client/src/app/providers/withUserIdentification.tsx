import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import { userStore } from '@/shared/store/user/userStore'

import type { PropsWithChildren, ReactNode } from 'react'

const UserIdentificationMiddleware = observer(
  ({ children }: PropsWithChildren) => {
    const { initialized } = userStore

    useEffect(() => {
      userStore.fetchUser().then(console.log).catch(console.log)
    }, [])

    if (!initialized) {
      // waiting first request
      return null
    }

    return <>{children}</>
  }
)
export const withUserIdentification = (component: () => ReactNode) => () =>
  <UserIdentificationMiddleware> {component()} </UserIdentificationMiddleware>
