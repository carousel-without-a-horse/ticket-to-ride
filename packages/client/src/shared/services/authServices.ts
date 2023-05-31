import axios from 'axios'
import type { TAuthService } from './types'

axios.defaults.baseURL = '/api/auth'

const authServices: TAuthService = {
  signIn: async data => {
    return axios.post('/sign-in', {
      data: JSON.stringify(data),
    })
  },
}

export default authServices
