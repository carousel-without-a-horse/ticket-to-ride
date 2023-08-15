import type { TUser } from '@/shared/store/user'
import type { AxiosResponse } from 'axios'

export type TPasswordSent = {
  oldPassword: string
  newPassword: string
}

export type TUserSent = {
  login: string
  first_name: string
  second_name?: string
  email: string
  phone: string
  id: number
  display_name: string
}

export type TUserService = {
  changeUserProfile: (data: TUserSent) => Promise<unknown>
  changeUserPassword: (data: TPasswordSent) => Promise<unknown>
  changeAvatar: (data: FormData) => Promise<AxiosResponse<TUser, unknown>>
  getUser: (id: number) => Promise<unknown>
}
