import { httpService } from '@/shared/services/httpService'

import type { TAuthService } from './types'

const authServices: TAuthService = {
  signIn: data => {
    return httpService.post('/v2/auth/signin', data)
  },
  signUp: data => {
    return httpService.post('/v2/auth/signup', data)
  },
  fetchUser: () => {
    return httpService.get('/v2/auth/user')
  },
  logOut: () => {
    return httpService.post('/v2/auth/logout')
  },
}

export default authServices
