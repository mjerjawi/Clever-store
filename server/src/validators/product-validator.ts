import { Request, Response, NextFunction } from 'express'
import { check, validationResult } from 'express-validator'
import { httpStatusCodes } from '../config/http-status-codes'

export const productValidator = [
  check('name')
    .trim()
    .notEmpty()
    .withMessage('Product name can not be empty!')
    .bail()
    .isLength({ min: 3 })
    .withMessage('Product name must be at least 3 characters!')
    .bail(),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res
        .status(httpStatusCodes.BAD_REQUEST)
        .json({ errors: errors.array() })
    next()
  },
]
