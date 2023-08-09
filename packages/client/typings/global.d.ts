/* eslint-disable @typescript-eslint/naming-convention */

import type { TInitialData } from '@/shared/store'

declare global {
  interface Window {
    __INITIAL_STATE__?: TInitialData
  }
}

export {}
