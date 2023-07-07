import { makeObservable, observable, action } from 'mobx'
import { AxiosError } from 'axios'

import authServices from '@/shared/services/authServices'

import type { TUser } from './types'

export class UserStore {
  user: TUser | null = null
  initialized = false
  error: AxiosError | null = null

  constructor() {
    makeObservable(this, {
      user: observable,
      initialized: observable,
      fetchUser: action,
      setUser: action,
    })
    this.fetchUser = this.fetchUser.bind(this)
    this.clearUser = this.clearUser.bind(this)
    this.setUser = this.setUser.bind(this)
  }

  async fetchUser() {
    this.error = null
    try {
      const response = await authServices.fetchUser()
      if (!response) {
        throw new Error('Empty response')
      }
      this.user = response
    } catch (error) {
      if (error instanceof AxiosError) {
        this.error = error
      }
    }
    this.initialized = true
  }

  setUser(user: TUser | null) {
    this.user = user
  }

  clearUser() {
    this.user = null
  }
}

export const userStore = new UserStore()
