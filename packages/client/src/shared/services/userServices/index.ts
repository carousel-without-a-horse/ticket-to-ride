import { httpService } from '@/shared/services/httpService'

import type { TUserService } from './types'

const userServices: TUserService = {
  changeUserProfile: async data => {
    return httpService.put('/v2/user/profile', {
      ...data,
    })
  },
  changeUserPassword: async data => {
    return httpService.put('/v2/user/password', {
      ...data,
    })
  },
  changeAvatar: async form => {
    return httpService.put('/v2/user/profile/avatar', form, {
      headers: {
        'Content-Type': `multipart/form-data`,
      },
    })
  },
  getUser: async id => {
    return httpService.get(`/v2/user/${id}`)
  },
}

export default userServices
