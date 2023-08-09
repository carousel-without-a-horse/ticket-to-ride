declare type TObject = Record<string, unknown>

declare type TUser = {
  id: number
}

declare namespace Express {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Request {
    user: TUser
  }
}
