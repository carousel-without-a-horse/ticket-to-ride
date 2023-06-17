import { httpService } from '@/shared/services/httpService'

import type { TAuthService } from './types'

httpService.defaults.baseURL = 'https://ya-praktikum.tech/api/v2'

const authServices: TAuthService = {
  signIn: data => {
    return httpService.post('/auth/signin', data)
  },
  signUp: data => {
    return httpService.post('/auth/signup', data)
  },
}

export default authServices
