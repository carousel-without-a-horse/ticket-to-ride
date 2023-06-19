import { httpService } from '@/shared/services/httpService'

import type { TAuthService } from './types'

const authServices: TAuthService = {
  signIn: data => {
    return httpService.post('/auth/signin', data)
  },
  signUp: data => {
    return httpService.post('/auth/signup', data)
  },
  fetchUser: () => {
    return httpService.get('/auth/user')
  },
  logOut: () => {
    return httpService.post('/auth/logout')
  },
}

export default authServices
