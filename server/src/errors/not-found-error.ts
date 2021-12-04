import { BaseError } from './base-error'
import { httpStatusCodes } from '../config/http-status-codes'

export class NotFoundError extends BaseError {
  statusCode = httpStatusCodes.NOT_FOUND
  reason = 'Not Found'
  constructor() {
    super('Route not found')

    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serializeErrors() {
    return [{ msg: this.reason }]
  }
}
