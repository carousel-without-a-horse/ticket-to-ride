import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/app/router/config'
import { useStore } from '@/shared/store'

import { LOCAL_STORAGE_KEYS } from '../constants/localStorage'

export const withAuth = (Component: any) =>
  observer((props: any) => {
    const { userStore } = useStore()
    const navigate = useNavigate()
    const localStorageUserLogin = localStorage.getItem(
      LOCAL_STORAGE_KEYS.userLogin
    )
    const isLogout =
      !localStorageUserLogin &&
      window.location.pathname !== ROUTES.signIn &&
      window.location.pathname !== ROUTES.signUp

    const isLogin =
      localStorage.getItem(LOCAL_STORAGE_KEYS.userLogin) &&
      (window.location.pathname === ROUTES.signIn ||
        window.location.pathname === ROUTES.signUp)

    useEffect(() => {
      if (isLogout) {
        navigate(ROUTES.signIn)
      } else if (isLogin) {
        navigate(ROUTES.root)
      }
    }, [isLogout, isLogin, navigate, userStore.userLogin])

    if (isLogout || isLogin) {
      return null
    }

    return <Component {...props} />
  })
