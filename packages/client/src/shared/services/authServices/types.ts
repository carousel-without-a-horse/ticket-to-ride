import type { TUser } from '@/shared/store/user'

export type TSignInSent = {
  login: string
  password: string
}

export type TSignUpSent = TSignInSent & {
  first_name: string
  second_name: string
  email: string
  phone: string
}

export type TAuthService = {
  signIn: (data: TSignInSent) => Promise<unknown>
  signUp: (data: TSignUpSent) => Promise<unknown>
  fetchUser: () => Promise<TUser>
  logOut: () => Promise<unknown>
}
