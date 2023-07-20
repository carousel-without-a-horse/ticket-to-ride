import type { NextFunction, Request, Response } from 'express'

export type TMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => void | Promise<void>
