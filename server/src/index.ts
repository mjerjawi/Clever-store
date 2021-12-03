import { app } from './app'

const start = async () => {
  const port: Number = 3000
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
  })
}

// App initialization
start()
