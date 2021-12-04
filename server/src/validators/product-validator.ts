import { Request, Response, NextFunction } from 'express'
import { check, validationResult } from 'express-validator'
import { httpStatusCodes } from '../config/http-status-codes'

export const productValidator = [
  check('name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Product name can not be empty!')
    .bail()
    .isLength({ min: 3 })
    .withMessage('Minimum 3 characters required!')
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
