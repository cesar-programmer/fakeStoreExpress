import Joi from 'joi'

const id = Joi.number().integer()
const name = Joi.string().min(3).max(30)
const lastName = Joi.string().min(3).max(30)
const email = Joi.string().email()
const password = Joi.string().min(3).max(30)
const age = Joi.number().integer()
const image = Joi.string().uri()
const isBlock = Joi.boolean()

const createUserSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  email: email.required(),
  password: password.required(),
  age: age.required(),
  image: image.required(),
  isBlock: isBlock.required()
})

const updateUserSchema = Joi.object({
  name,
  lastName,
  email,
  password,
  age,
  image
})

const getUserSchema = Joi.object({
  id: id.required()
})

export { createUserSchema, updateUserSchema, getUserSchema }
