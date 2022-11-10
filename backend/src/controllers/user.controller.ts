import UserEntity from '../entities/user.entity'
import { FastifyRequest, FastifyReply} from 'fastify'

class UserController {
  public async createUser (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    try {
      const user = await new UserEntity().createUser(request.body)
      if (!user) {
        throw new Error('Error creating user')
      }
      // enviar mensagem por websocket, para o outro servidor

      return reply.status(201).send({ message: 'User created successfully' })
    } catch (error) {
      return reply.send({ message: error.message }).status(500)
    }
  }

  public async getAll (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    try {
      const users = await new UserEntity().getAll()
      return reply.status(200).send(users)
    } catch (error) {
      return reply.status(500).send({ message: error.message })
    }
  }

  public async getUser (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    try {
      const {_id} = request.params
      const user = await new UserEntity().getUser(_id)
      return reply.status(200).send(user)
    } catch (error) {
      return reply.status(500).send({ message: error.message })
    }
  }

  public async deleteUser (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    try {
      const user = await new UserEntity().deleteUser(request.params._id)
      return reply.status(200).send(user)
    } catch (error) {
      return reply.status(500).send({ message: error.message })
    }
  }
}

export default new UserController()
