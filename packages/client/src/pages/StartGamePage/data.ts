import { characters } from '@/entities/Game/data/characters'

import type { TCharactersOption } from './types'

export const characterOptions: TCharactersOption = []

Object.keys(characters).forEach(key => {
  characterOptions.push({
    value: key,
    label: key[0].toUpperCase() + key.slice(1),
  })
})
