import { validatorHandle } from '../middlewares/validation_handler.js'
import { createUserSchema, getUserSchema, updateUserSchema } from '../schemas/user.schema.js'
import { Router } from 'express'
import { createUser, getUsers, getUser, updateUser, updateUserPartial, deleteUser } from '../controllers/users.controller.js'

const router = Router()

router.get('/', getUsers)
router.get('/:id', validatorHandle(getUserSchema, 'params'), getUser)
router.post('/', validatorHandle(createUserSchema, 'body'), createUser)
router.patch('/:id', validatorHandle(getUserSchema, 'params'), validatorHandle(updateUserSchema, 'body'), updateUser)
router.put('/:id', validatorHandle(getUserSchema, 'params'), validatorHandle(updateUserSchema, 'body'), updateUserPartial)
router.delete('/:id', deleteUser)

export default router
