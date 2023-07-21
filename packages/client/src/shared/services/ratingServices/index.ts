import { httpService } from '@/shared/services/httpService'
import { teamName } from '@/shared/constants/apiConsts'

import type { TRatingService } from './types'

const BASE_URL = '/v2/leaderboard'

const ratingServices: TRatingService = {
  addUserToLeaderboard: async data => {
    return httpService.post(BASE_URL, data)
  },
  getRating: async data => {
    return httpService.post(`${BASE_URL}/${teamName}`, data)
  },
}

export default ratingServices
