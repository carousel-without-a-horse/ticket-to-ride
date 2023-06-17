import { makeAutoObservable } from 'mobx'

class UserStore {
  userLogin: string | null = null

  constructor() {
    makeAutoObservable(this)
  }

  setLogin(login: string | null) {
    this.userLogin = login
  }
}

export default UserStore
