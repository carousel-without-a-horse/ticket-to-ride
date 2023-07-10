/* eslint-disable @typescript-eslint/naming-convention */

import type { TUser } from '@/shared/store/user'

declare global {
  interface Window {
    __INITIAL_STATE__?: TUser | null
  }
}

export {}
