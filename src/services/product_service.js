import { faker } from '@faker-js/faker'
import Boom from '@hapi/boom'

class ProductService {
  constructor () {
    this.products = []
    this.generate()
  }

  async generate () {
    const limit = 100
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.number.int(1000),
        // faker.string.uuid()
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseInt(faker.commerce.price()),
        category: faker.commerce.department(),
        image: faker.image.url(),
        isBlock: faker.datatype.boolean()
      })
    }
  }

  async createProduct (product) {
    const newProduct = {
      id: faker.string.uuid(),
      ...product
    }
    this.products.push(newProduct)
    return newProduct
  }

  async find () {
    return this.products
  }

  async findOne (id) {
    const product = this.products.find((product) => product.id === Number(id))
    if (!product) {
      throw Boom.notFound('product not found')
    }
    if (product.isBlock) {
      throw Boom.conflict('product is block')
    }
    return product
  }

  async update (id, product) {
    const productIndex = this.products.findIndex((product) => product.id === Number(id))

    // si no existe el producto con ese id, retorna null
    if (productIndex === -1) {
      throw Boom.notFound('product not found')
    }

    // si existe el producto con ese id, lo actualiza y retorna el producto actualizado
    const updatedProduct = this.products[productIndex]
    this.products[productIndex] = {
      ...updatedProduct,
      ...product
    }
    return updatedProduct
  }

  async delete (id) {
    const productIndex = this.products.findIndex((product) => product.id === Number(id))

    // si no existe el producto con ese id, retorna null
    if (productIndex === -1) {
      throw Boom.notFound('product not found')
    }

    // si existe el producto con ese id, lo elimina y retorna el producto eliminado
    // splice recibe dos parametros, el primero es el indice del elemento a eliminar y el segundo es la cantidad de elementos a eliminar
    this.products.splice(productIndex, 1)
    const deletedProduct = this.products[productIndex]
    return deletedProduct
  }

  async findCategories () {
    const categories = this.products.map((product) => product.category)
    return [...new Set(categories)]
  }

  async findProductsCategory (name) {
    const products = this.products.filter((product) => product.category === name)
    return products
  }
}

export default ProductService
