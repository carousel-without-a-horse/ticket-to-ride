import type { NextFunction, Request, Response } from 'express'
import type { BaseController } from '../../common/BaseController'
import type { LikeDto } from './dto'

export type TLikeController = BaseController & {
  getAll: (req: Request, res: Response, next: NextFunction) => Promise<void>
  toggleLike: (
    req: Request<TObject, TObject, LikeDto>,
    res: Response,
    next: NextFunction,
  ) => Promise<void>
  toggleDislike: (
    req: Request<TObject, TObject, LikeDto>,
    res: Response,
    next: NextFunction,
  ) => Promise<void>
}
