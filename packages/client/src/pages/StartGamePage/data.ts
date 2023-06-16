import { characters } from '@/widgets/Game/data/characters'

export const playersOptions: object[] = []

Object.keys(characters).forEach(key => {
  playersOptions.push({ value: key, label: key })
})
