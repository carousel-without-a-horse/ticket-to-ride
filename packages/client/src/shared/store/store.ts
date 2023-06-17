import { makeAutoObservable } from 'mobx'
import { createContext, useContext } from 'react'

import { characters } from '../constants/options'

import type { TLanguages, TCharacters, TThemeModes } from './types'

export const store = makeAutoObservable(
  {
    themeMode: 'light' as TThemeModes,
    lang: 'ru' as TLanguages,
    currentCharacter: null as TCharacters,
    opponentCharacter: null as TCharacters,
    currentMode: 'Против Компьютера' as string,

    handleToggleTheme: function () {
      this.themeMode = this.isDarkMode ? 'light' : 'dark'
    },
    handleToggleLang: function (value: TLanguages) {
      this.lang = value
    },
    get isDarkMode() {
      return this.themeMode === 'dark'
    },
    handleSelectCharacters: function (value: TCharacters) {
      this.currentCharacter = value
      const players = Object.keys(characters)
      const currentPlayerIndex = players.indexOf(value as string)
      if (players[currentPlayerIndex] === this.currentCharacter) {
        this.opponentCharacter = players[currentPlayerIndex + 1] // TODO: костыль для выбора противника, будет исправлен в задаче CAR-38
          ? (players[currentPlayerIndex + 1] as TCharacters)
          : (players[currentPlayerIndex - 1] as TCharacters)
      }
    },
  },
  {},
  { autoBind: true }
)

export const StoreContext = createContext(store)

export const useStore = () => {
  return useContext(StoreContext)
}
