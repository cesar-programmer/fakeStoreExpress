import ProductService from '../services/product_service.js'

const productService = new ProductService()

// get catgeories
export const getCategories = async (req, res) => {
  try {
    const categories = await productService.findCategories()
    res.json(categories)
  } catch (error) {
    res.status(400).json(error)
  }
}

// get one category by name
export const findProductsCategory = async (req, res) => {
  try {
    const { name } = req.params
    const products = await productService.findProductsCategory(name)
    res.json(products)
  } catch (error) {
    res.status(400).json(error)
  }
}
