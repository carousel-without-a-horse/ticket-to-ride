import { httpService } from '@/shared/services/httpService'

import type { TAuthService } from './types'

httpService.defaults.baseURL = 'https://ya-praktikum.tech/api/v2/auth'

const authServices: TAuthService = {
  signIn: data => {
    return httpService.post('/signin', data)
  },
  signUp: data => {
    return httpService.post('/signup', data)
  },
}

export default authServices
