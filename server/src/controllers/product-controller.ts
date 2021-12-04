import express, { Request, Response } from 'express'
import { Product } from '../models/product'
import { httpStatusCodes } from '../config/http-status-codes'

import { NotFoundError } from '../errors/not-found-error'
import { catchAsyncErrors } from '../middlewares/catch-async-errors'

/**
 * @desc    - create new product
 * @method  - POST /api/v1/admin/products/new
 * @access  - PRIVATE (Admin only)
 */
export const createProduct = async (req: Request, res: Response) => {
  const product = await Product.create(req.body)

  res.status(httpStatusCodes.CREATED).json({
    success: true,
    product: product,
  })
}

/**
 * @desc    - Fetch all
 * @method  - (GET) /api/v1/products/
 * @access  - PUBLIC
 */
export const getProducts = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const products = await Product.find()

    res.status(httpStatusCodes.OK).json({
      success: true,
      products: products,
    })
  }
)

/**
 * @desc    - Fetch a single product by ID
 * @method  - (GET) /api/v1/products/:id
 * @access  - PUBLIC
 */
export const getProductById = catchAsyncErrors(
  async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id)

    if (product === null) {
      throw new NotFoundError()
    }

    res.status(httpStatusCodes.OK).json({
      success: true,
      product: product,
    })
  }
)
