import mongoose, { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

interface User {
  name: string
  email: string
  password: string
  role: string
  resetPasswordToken: string
  resetPasswordExpire: string
}

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: { unique: true },
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: 'user',
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },

  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id
        delete ret._id
        delete ret.password
      },
    },
  }
)

// password encrypting
UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const saltRounds = 10
    const salt = await bcrypt.genSalt(saltRounds)
    this.password = await bcrypt.hash(this.password, salt)
    next()
  }
})

// password compare
UserSchema.methods.comparePassword = async function (password) {
  if (!password) throw new Error('password is missing could not compare!')
  try {
    const result = await bcrypt.compare(password, this.password)
    return result
  } catch (error) {
    console.error(error)
  }
}

const User = mongoose.model('User', UserSchema)

export { User }
