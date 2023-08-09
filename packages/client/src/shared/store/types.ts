import type { TUser } from './user'

export enum Theme {
  'dark' = 1,
  'light' = 2,
}

export enum Lang {
  'ru' = 1,
  'en' = 2,
}

type TSettings = {
  themeId?: number
  langId?: number
}

export type TInitialData = {
  user: TUser | null
  settings: TSettings | null
}
