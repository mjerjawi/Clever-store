import { app } from './app'
import { mongoConnect } from './config/mongo-connect'
import dotenv from 'dotenv'

// Setting up environment variables path
dotenv.config({ path: 'src/config/.env' })

const start = async () => {
  mongoConnect()
  const port: Number = 5000
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
  })
}

// App initialization
start()
