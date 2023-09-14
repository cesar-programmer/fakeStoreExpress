import { Router } from 'express'
import { getCategories, findProductsCategory } from '../controllers/categories.controlle.js'

const router = Router()

router.get('/', getCategories)
router.get('/:name', findProductsCategory)

export default router
