import { httpStatusCodes } from '../config/http-status-codes'

export abstract class BaseError extends Error {
  abstract statusCode: httpStatusCodes
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, BaseError.prototype)
  }

  abstract serializeErrors(): {
    msg: string
    field?: string
  }[]
}
