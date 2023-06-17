import { makeAutoObservable } from 'mobx'

import type { TLogin } from './types'

class UserStore {
  userLogin: TLogin = null

  constructor() {
    makeAutoObservable(this)
  }

  setLogin(login: TLogin) {
    this.userLogin = login
  }
}

export default UserStore
