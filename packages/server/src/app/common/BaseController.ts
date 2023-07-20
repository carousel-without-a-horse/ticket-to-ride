import { injectable } from 'inversify'
import { NextFunction, Request, Response, Router } from 'express'

import type { ILoggerService } from '../services/loggerService'
import type {
  IRestApiController,
  TControllerRoute,
  TExpressReturn,
} from './types'

@injectable()
export abstract class BaseController implements IRestApiController {
  private readonly _router: Router

  public constructor(private logger: ILoggerService) {
    this._router = Router()
  }

  get router(): Router {
    return this._router
  }

  getAll?: (req: Request, res: Response, next: NextFunction) => void
  create?: (req: Request, res: Response, next: NextFunction) => void
  read?: (req: Request, res: Response, next: NextFunction) => void
  update?: (req: Request, res: Response, next: NextFunction) => void
  delete?: (req: Request, res: Response, next: NextFunction) => void

  send<T>(res: Response, code: number, message: T): TExpressReturn {
    res.type('application/json')
    return res.status(code).json(message)
  }

  ok<T>(res: Response, message: T): TExpressReturn {
    return this.send<T>(res, 200, message)
  }

  protected bindRoutes(routes: TControllerRoute[]): void {
    for (const route of routes) {
      this.logger.info(`[${route.method}] ${route.path}`)
      const middleware = route.middlewares?.map(m => m.execute.bind(m))
      const handler = route.func.bind(this)
      const pipeline = middleware ? [...middleware, handler] : handler
      this.router[route.method](route.path, pipeline)
    }
  }
}
