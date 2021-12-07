import { Request, Response, NextFunction } from 'express'
import { check, body, validationResult } from 'express-validator'
import { httpStatusCodes } from '../config/http-status-codes'

export const userValidator = [
  check('name')
    .trim()
    .notEmpty()
    .withMessage('User name can not be empty!')
    .bail()
    .isLength({ min: 3 })
    .withMessage('User name must be at least 3 characters!')
    .isLength({ max: 50 })
    .withMessage('User name must not exceed 50 characters!'),
  check('email')
    .trim()
    .notEmpty()
    .withMessage('Email can not be empty!')
    .bail()
    .isEmail()
    .withMessage('Please provide a valid email address'),

  check('password')
    .notEmpty()
    .withMessage('Password can not be empty!')
    .isLength({ min: 8 })
    .withMessage('password must be at least 8 characters'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res
        .status(httpStatusCodes.BAD_REQUEST)
        .json({ errors: errors.array() })
    next()
  },
]
