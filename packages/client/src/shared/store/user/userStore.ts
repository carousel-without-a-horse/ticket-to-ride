import { makeObservable, observable, action } from 'mobx'

import authServices from 'src/shared/services/authServices'

import type { AxiosError } from 'axios'
import type { TUser } from '@/pages/ProfilePage/ui/ProfileForm/type'

type TStatus = 'initial' | 'loading' | 'error' | 'success'
export class UserStore {
  user: TUser | null = null
  status: TStatus = 'initial'
  initialized = false
  error: AxiosError | null = null

  constructor() {
    makeObservable(this, {
      user: observable,
      status: observable,
      initialized: observable,
      fetchUser: action,
    })
    this.fetchUser = this.fetchUser.bind(this)
    this.clearUser = this.clearUser.bind(this)
  }

  async fetchUser() {
    this.status = 'loading'
    this.error = null
    try {
      const response = await authServices.fetchUser()
      if (!response) {
        throw new Error('Empty response')
      }
      this.status = 'success'
      this.user = response
    } catch (error) {
      this.status = 'error'
      if ((error as AxiosError).isAxiosError) {
        this.error = error as AxiosError
      }
    }
    this.initialized = true
  }

  clearUser() {
    this.user = null
  }
}

export const userStore = new UserStore()
