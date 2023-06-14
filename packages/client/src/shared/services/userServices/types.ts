import type { TUploadFile } from '@/shared/ui/Upload'

export type TPasswordSent = {
  oldPassword: string
  newPassword: string
}

export type TUserSent = {
  login: string
  firstName: string
  secondName?: string
  email: string
  phone: string
}

export type TUserService = {
  changeUserProfile: (data: TUserSent) => Promise<unknown>
  changeUserPassword: (data: TPasswordSent) => Promise<unknown>
  changeAvatar: (data: TUploadFile) => Promise<unknown>
  getUser: (id: number) => Promise<unknown>
}
