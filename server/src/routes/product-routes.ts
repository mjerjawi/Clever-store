import express from 'express'
// controllers
import {
  createProduct,
  getProductById,
  getProducts,
} from '../controllers/product-controller'
// validators
import { productValidator } from '../validators/product-validator'

const router = express.Router()

// routes
router.route('/products').get(getProducts)
router.route('/products/:id').get(getProductById)

router.route('/admin/products/new').post(productValidator, createProduct)

export { router as productRouter }
