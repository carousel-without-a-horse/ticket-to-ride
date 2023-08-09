import { makeAutoObservable } from 'mobx'
import { createContext, useContext } from 'react'

import i18n from '@/shared/lib/i18n/config'

import { UserStore } from './user'
import GameStore from './game/gameStore'
import { Lang, Theme } from './types'

import type { TInitialData } from './types'

export const createStore = () =>
  makeAutoObservable(
    {
      themeMode: Theme.light as Theme,
      langId: Lang.ru,
      setLangId: function (langId?: number) {
        if (!langId || !Lang[langId]) return
        this.langId = langId
        void i18n.changeLanguage(Lang[langId])
      },
      setTheme: function (themeId?: number) {
        if (!themeId || !Theme[themeId]) return
        this.themeMode = themeId
      },
      get settings() {
        return {
          langId: this.langId,
          themeId: this.themeMode,
        }
      },
      get isDarkMode() {
        return this.themeMode === Theme.dark
      },
      setInitialData: function (data: TInitialData) {
        try {
          this.userStore.setUser(data.user)
          this.setTheme(data.settings?.themeId)
          this.setLangId(data.settings?.langId)
        } catch (e) {
          console.error(
            'Error initializing the store on the client, check the data format'
          )
        }
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
