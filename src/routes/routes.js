import products from './products.routes.js'
import categories from './categories.routes.js'
import users from './users.routes.js'

import { Router } from 'express'

const router = Router()

router.use('/products', products)
router.use('/categories', categories)
router.use('/users', users)

router.get('/', (req, res) => {
  res.send('Hello World! soy cesar perros')
})

export default router
