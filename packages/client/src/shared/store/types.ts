import type { characters } from '../constants/options'

export type TThemeModes = 'dark' | 'light'

export type TLanguages = 'ru' | 'en'

export type TCharacters = keyof typeof characters | null
