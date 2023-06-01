export type TSignInSent = {
  login: string
  password: string
}

export type TSignUpSent = TSignInSent & {
  firstName: string
  secondName?: string
  email: string
  phone: string
}

export type TAuthService = {
  signIn: (data: TSignInSent) => Promise<unknown>
  signUp: (data: TSignUpSent) => Promise<unknown>
}
