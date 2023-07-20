import { httpService } from '@/shared/services/httpService'
import { teamName } from '@/shared/constants/apiConsts'

import type { TRatingService } from './types'

const ratingServices: TRatingService = {
  addUserToLeaderboard: async data => {
    return httpService.post('/v2/leaderboard', data)
  },
  getRating: async data => {
    return httpService.post(`/v2/leaderboard/${teamName}`, data)
  },
}

export default ratingServices
