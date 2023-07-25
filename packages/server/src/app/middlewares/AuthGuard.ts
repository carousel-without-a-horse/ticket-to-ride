import type { TMiddleware } from './types'

export const AuthGuardMiddleware: TMiddleware = (req, res, next) => {
  if (req.user) {
    return next()
  }
  res.status(403).send({ error: 'Вы не авторизованы' })
}
