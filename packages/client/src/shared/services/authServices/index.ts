import { httpService } from '@/shared/services/httpService'

import type { TAuthService } from './types'

httpService.defaults.baseURL = '/api/auth'

const authServices: TAuthService = {
  signIn: data => {
    return httpService.post('/sign-in', {
      data: JSON.stringify(data),
    })
  },
  signUp: data => {
    return httpService.post('/sign-up', {
      data: JSON.stringify(data),
    })
  },
}

export default authServices
