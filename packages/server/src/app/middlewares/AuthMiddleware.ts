import axios from 'axios'

import type { TMiddleware } from './types'

const API_ROOT = 'https://ya-praktikum.tech/api/v2'

export const AuthMiddleware: TMiddleware = async (req, _res, next) => {
  if (req.user) {
    return next()
  }
  try {
    const { data } = await axios.get<TUser | null>(`${API_ROOT}/auth/user`, {
      headers: {
        cookie: req.headers['cookie'],
      },
    })
    if (data) {
      req.user = data
    }
    next()
  } catch (e) {
    next()
  }
}
