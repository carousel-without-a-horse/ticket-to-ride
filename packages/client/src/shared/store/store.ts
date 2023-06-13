import { makeAutoObservable } from 'mobx'
import type { TLanguages, TThemeModes } from './types'
import { createContext, useContext } from 'react'

export const store = makeAutoObservable(
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
  },
  {},
  { autoBind: true }
)

export const StoreContext = createContext(store)

export const useStore = () => {
  return useContext(StoreContext)
}
