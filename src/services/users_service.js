import { faker } from '@faker-js/faker'
import Boom from '@hapi/boom'

class UserService {
  constructor () {
    this.users = []
    this.generate()
  }

  async generate () {
    const limit = 100
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.number.int(1000),
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        age: faker.number.int(100),
        image: faker.image.url(),
        isBlock: faker.datatype.boolean()
      })
    }
  }

  async createUser (user) {
    const newUser = {
      id: faker.string.uuid(),
      ...user
    }
    this.users.push(newUser)
    return newUser
  }

  async find () {
    return this.users
  }

  async findOne (id) {
    const user = this.users.find((user) => user.id === Number(id))
    if (!user) {
      throw Boom.notFound('user not found')
    }
    if (user.isBlock) {
      throw Boom.conflict('user is block')
    }
    return user
  }

  async update (id, user) {
    const userIndex = this.users.findIndex((user) => user.id === Number(id))

    // si no existe el user con ese id, retorna null
    if (userIndex === -1) {
      throw Boom.notFound('user not found')
    }

    // si existe el user con ese id, lo actualiza y retorna el user actualizado
    const updatedUser = this.users[userIndex]
    this.users[userIndex] = {
      ...updatedUser,
      ...user
    }
    return this.users[userIndex]
  }

  async delete (id) {
    const userIndex = this.users.findIndex((user) => user.id === Number(id))

    // si no existe el user con ese id, retorna null
    if (userIndex === -1) {
      throw Boom.notFound('user not found')
    }

    // si existe el user con ese id, lo elimina y retorna true
    this.users.splice(userIndex, 1)
    return true
  }
}

export default UserService
