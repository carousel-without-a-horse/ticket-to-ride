import { inject, injectable } from 'inversify'

import { TYPES } from '../../types'

import { HTTPError } from './HttpError'

import type { Request, Response, NextFunction } from 'express'
import type { ILoggerService } from '../services/loggerService'
import type { IExceptionFilter } from './types'

@injectable()
export class ExceptionFilter implements IExceptionFilter {
  constructor(@inject(TYPES.Logger) private logger: ILoggerService) {}

  catch(
    err: Error | HTTPError,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ): void {
    if (err instanceof HTTPError) {
      const { statusCode, message, context } = err
      this.logger.error(`[${context || ''}] Error ${statusCode}: ${message}`)
      res.status(statusCode).send({ error: message, statusCode })
    } else {
      this.logger.error(`${err.message}`)
      res.status(500).send({ error: err.message })
    }
  }
}
