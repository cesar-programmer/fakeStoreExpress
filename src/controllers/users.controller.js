import UserService from '../services/users_service.js'

const userService = new UserService()

// post
export const createUser = async (req, res) => {
  const { body: user } = req
  try {
    const createdUser = await userService.createUser(user)
    res.status(201).json(createdUser)
  } catch (error) {
    res.status(400).json(error)
  }
}

// get
export const getUsers = async (req, res) => {
  try {
    const users = await userService.find()
    res.json(users)
  } catch (error) {
    res.status(400).json(error)
  }
}

// get
export const getUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await userService.findOne(id)
    res.json(user)
  } catch (error) {
    res.status(400).json(error)
  }
}

// put
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const { body: user } = req
    const updatedUser = await userService.update(id, user)
    res.json(updatedUser)
  } catch (error) {
    res.status(400).json(error)
  }
}

// patch
export const updateUserPartial = async (req, res) => {
  try {
    const { id } = req.params
    const { body: user } = req
    const updatedUser = await userService.updatePartial(id, user)
    res.json(updatedUser)
  } catch (error) {
    res.status(400).json(error)
  }
}

// delete
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const deletedUser = await userService.delete(id)
    res.json(deletedUser)
  } catch (error) {
    res.status(400).json(error)
  }
}
