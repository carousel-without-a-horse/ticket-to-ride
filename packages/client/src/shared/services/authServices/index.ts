import { httpService } from '@/shared/services/httpService'
import type { TAuthService } from './types'

httpService.defaults.baseURL = '/api/auth'

const index: TAuthService = {
  signIn: async data => {
    return httpService.post('/sign-in', {
      data: JSON.stringify(data),
    })
  },
}

export default index
