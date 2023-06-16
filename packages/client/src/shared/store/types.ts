import type { characters } from '@/widgets/Game/data/characters'

export type TThemeModes = 'dark' | 'light'

export type TLanguages = 'ru' | 'en'

export type TPlayer = keyof typeof characters | null
