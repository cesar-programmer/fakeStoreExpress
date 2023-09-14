import { createProductSchema, updateProductSchema, getProductSchema } from '../schemas/product.schemas.js'
import { validatorHandle } from '../middlewares/validation_handler.js'
import { Router } from 'express'

import { createProduct, getProducts, getProduct, updateProduct, deleteProduct } from '../controllers/products.controller.js'

const router = Router()

router.get('/', getProducts)
router.get('/:id', validatorHandle(getProductSchema, 'params'), getProduct)
router.post('/', validatorHandle(createProductSchema, 'body'), createProduct)
router.patch('/:id', validatorHandle(getProductSchema, 'params'), validatorHandle(updateProductSchema, 'body'), updateProduct)
router.delete('/:id', deleteProduct)

export default router
