import { makeAutoObservable } from 'mobx'
import { createContext, useContext } from 'react'

import { characters } from '@/widgets/Game/data/characters'

import type { TLanguages, TPlayer, TThemeModes } from './types'

export const store = makeAutoObservable(
  {
    themeMode: 'light' as TThemeModes,
    lang: 'ru' as TLanguages,
    currentPlayer: null as TPlayer,
    opponentPlayer: null as TPlayer,

    handleToggleTheme: function () {
      this.themeMode = this.isDarkMode ? 'light' : 'dark'
    },
    handleToggleLang: function (value: TLanguages) {
      this.lang = value
    },
    get isDarkMode() {
      return this.themeMode === 'dark'
    },
    handlePlayerChoice: function (value: TPlayer) {
      this.currentPlayer = value
      const players = Object.keys(characters as object)
      const currentPlayerIndex = players.indexOf(value as string)
      if (players[currentPlayerIndex] === this.currentPlayer) {
        this.opponentPlayer = players[currentPlayerIndex + 1] // костыль для выбора противника
          ? (players[currentPlayerIndex + 1] as TPlayer)
          : (players[currentPlayerIndex - 1] as TPlayer)
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
