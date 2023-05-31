export type TSignInSent = {
  login: string
  password: string
}

export type TAuthService = {
  signIn: (data: TSignInSent) => Promise<unknown>
}
