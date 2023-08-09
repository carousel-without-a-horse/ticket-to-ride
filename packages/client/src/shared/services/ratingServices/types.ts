import type { AxiosResponse } from 'axios'

export type TUserRatingData = {
  login: string
  firstName?: string
  secondName?: string
  email?: string
  rating: string
}

export type TRatingSent = {
  data: TUserRatingData
  teamName: string
  ratingFieldName: string
}

export type TRatingGet = {
  ratingFieldName: string
  cursor: number
  limit: number
}

export type TRatingService = {
  addUserToLeaderboard: (data: TRatingSent) => Promise<unknown>
  getRating: (data: TRatingGet) => Promise<AxiosResponse>
}
