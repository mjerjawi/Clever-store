import { Request, Response } from 'express'
import { User } from '../models/user'
import { httpStatusCodes } from '../config/http-status-codes'

import { NotFoundError } from '../errors/not-found-error'
import { catchAsyncErrors } from '../middlewares/catch-async-errors'

export const registerUser = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const { name, email, password } = req.body
    const user = await User.create({
      name,
      email,
      password,
    })
    res.status(httpStatusCodes.CREATED).json({
      success: true,
      user: user,
    })
  }
)
