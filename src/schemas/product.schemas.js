import Joi from 'joi'

const id = Joi.number().integer()
const name = Joi.string().min(3).max(30)
const description = Joi.string().min(3).max(100)
const price = Joi.number().integer()
const category = Joi.string().min(3).max(30)
const image = Joi.string().uri()
const isBlock = Joi.boolean()

const createProductSchema = Joi.object({
  name: name.required(),
  description: description.required(),
  price: price.required(),
  category: category.required(),
  image: image.required(),
  isBlock: isBlock.required()
})

const updateProductSchema = Joi.object({
  name,
  description,
  price,
  category,
  image
})

const getProductSchema = Joi.object({
  id: id.required()
})

export { createProductSchema, updateProductSchema, getProductSchema }
