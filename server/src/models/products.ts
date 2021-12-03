import mongoose, { Schema, model } from 'mongoose'

var refId = new mongoose.Types.ObjectId()

//Interface representing a document in MongoDB.
interface Product {
  name: string
  price: string
  description: string
  ratings: number
  numOfReviews: number
  reviews: [{ name: string; rating: number; comment: string }]
  images: []
  category: string
  supplier: string
  stock: number
  user: mongoose.Types.ObjectId
}

const productSchema = new Schema<Product>(
  {
    name: {
      type: String,
      required: [true, 'Please enter product name'],
      trim: true,
      maxLength: [150, 'Product name must not exceed 150 characters'],
    },
    price: {
      type: String,
      required: [true, 'Please enter product price'],
    },
    description: {
      type: String,
      required: [true, 'Please enter product description'],
    },
    ratings: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, 'Please Select a category'],
    },
    supplier: {
      type: String,
      required: [true, 'Please enter a supplier name'],
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    user: {
      type: refId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
)
