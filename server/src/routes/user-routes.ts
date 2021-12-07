import express from 'express'
// controllers
import { registerUser } from '../controllers/user-controller'
// validators
import { userValidator } from '../validators/user-validator'

const router = express.Router()

// router

router.route('/register').post(userValidator, registerUser)

export { router as userRouter }
