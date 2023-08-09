import { makeAutoObservable } from 'mobx'
import { createContext, useContext } from 'react'

import { UserStore } from './user'
import GameStore from './game/gameStore'

import type { TLanguages, TThemeModes } from './types'

export const createStore = () =>
  makeAutoObservable(
    {
      themeMode: 'light' as TThemeModes,
      lang: 'ru' as TLanguages,

      handleToggleTheme: function () {
        this.themeMode = this.isDarkMode ? 'light' : 'dark'
      },
      handleToggleLang: function (value: TLanguages) {
        this.lang = value
      },
      get isDarkMode() {
        return this.themeMode === 'dark'
      },
      gameStore: new GameStore(),
      userStore: new UserStore(),
    },
    {},
    { autoBind: true }
  )

export const store = createStore()

export const StoreContext = createContext(store)

export const useStore = () => {
  return useContext(StoreContext)
}
