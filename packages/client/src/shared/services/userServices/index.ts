import { httpService } from '@/shared/services/httpService'

import type { TUserService } from './types'

const userServices: TUserService = {
  changeUserProfile: async data => {
    return httpService.put('/v2/profile', {
      data: JSON.stringify(data),
    })
  },
  changeUserPassword: async data => {
    return httpService.put('/v2/password', {
      data: JSON.stringify(data),
    })
  },
  changeAvatar: async data => {
    return httpService.put('/v2/profile/avatar', {
      data,
    })
  },
  getUser: async id => {
    return httpService.get(`/v2/sign-up/${id}`)
  },
}

export default userServices
