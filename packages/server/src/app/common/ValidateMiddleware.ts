import { ClassConstructor, plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'

import type { IMiddleware } from './types'
import type { NextFunction, Request, Response } from 'express'

export class ValidateMiddleware implements IMiddleware {
  constructor(
    private classToValidate: ClassConstructor<object>,
    private options?: {
      isBodyValidate?: boolean
      isParamValidate?: boolean
      isQueryValidate?: boolean
    },
  ) {}

  execute(req: Request, res: Response, next: NextFunction): void {
    const plain: unknown = this.getRequestValidatePart(req)
    const instance = plainToInstance(this.classToValidate, plain)

    void validate(instance).then(errors => {
      if (errors.length > 0) {
        res.status(422).send(errors)
      } else {
        next()
      }
    })
  }

  private getRequestValidatePart({
    body,
    query,
    params,
  }: Request): Request['params'] | Request['body'] | Request['query'] {
    if (this.options?.isParamValidate) {
      return params
    }

    if (this.options?.isQueryValidate) {
      return query
    }

    return body
  }
}
