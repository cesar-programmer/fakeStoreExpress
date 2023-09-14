import ProductService from '../services/product_service.js'

const productService = new ProductService()

// post
export const createProduct = async (req, res) => {
  const { body: product } = req
  try {
    const createdProduct = await productService.createProduct(product)
    res.status(201).json(createdProduct)
  } catch (error) {
    res.status(400).json(error)
  }
}

// get
export const getProducts = async (req, res) => {
  try {
    const products = await productService.find()
    res.json(products)
  } catch (error) {
    res.status(400).json(error)
  }
}

// get
export const getProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await productService.findOne(id)
    res.json(product)
  } catch (error) {
    res.status(400).json(error)
  }
}

// put
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const { body: product } = req
    const updatedProduct = await productService.update(id, product)
    res.json(updatedProduct)
  } catch (error) {
    res.status(400).json(error)
  }
}

// patch
export const updateProductPartial = async (req, res) => {
  try {
    const { id } = req.params
    const { body: product } = req
    const updatedProduct = await productService.updatePartial(id, product)
    res.json(updatedProduct)
  } catch (error) {
    res.status(400).json(error)
  }
}

// delete
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const deletedProduct = await productService.delete(id)
    res.json(deletedProduct)
  } catch (error) {
    res.status(400).json(error)
  }
}
