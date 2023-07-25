import type { NextFunction, Request, Response, Router } from 'express'

export interface IMiddleware {
  execute: (req: Request, res: Response, next: NextFunction) => void
}

export type TControllerRoute = {
  path: string
  func: (req: Request, res: Response, next: NextFunction) => void
  method: keyof Pick<Router, 'get' | 'post' | 'delete' | 'patch' | 'put'>
  middlewares?: IMiddleware[]
}

export type TExpressReturn = Response<any, Record<string, any>>

export interface IRestApiController {
  getAll?: (req: Request, res: Response, next: NextFunction) => void
  create?: (req: Request, res: Response, next: NextFunction) => void
  read?: (req: Request, res: Response, next: NextFunction) => void
  update?: (req: Request, res: Response, next: NextFunction) => void
  delete?: (req: Request, res: Response, next: NextFunction) => void
}
