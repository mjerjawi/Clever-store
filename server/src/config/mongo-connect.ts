import mongoose from 'mongoose'

export const mongoConnect = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error('Environment variable MONGO_URI is not configured')
  }
  try {
    // DB connection
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connected to db')
  } catch (error) {
    console.error(error)
  }
}
