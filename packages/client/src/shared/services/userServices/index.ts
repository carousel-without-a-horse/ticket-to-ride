import { httpService } from '@/shared/services/httpService'

import type { TUserService } from './types'

const userServices: TUserService = {
  changeUserProfile: async data => {
    return httpService.put('/profile', {
      data: JSON.stringify(data),
    })
  },
  changeUserPassword: async data => {
    return httpService.put('/password', {
      data: JSON.stringify(data),
    })
  },
  changeAvatar: async data => {
    return httpService.put('/profile/avatar', {
      data,
    })
  },
  getUser: async id => {
    return httpService.get(`/sign-up/${id}`)
  },
}

export default userServices
