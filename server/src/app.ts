import express from 'express'
import { json } from 'body-parser'
import { errorHandler } from './middlewares/error-handler'
import { productRouter } from './routes/product-routes'
import { userRouter } from './routes/user-routes'

const app = express()

app.use(json())

app.use('/api/v1', productRouter)
app.use('/api/v1', userRouter)
app.use(errorHandler)

export { app }
