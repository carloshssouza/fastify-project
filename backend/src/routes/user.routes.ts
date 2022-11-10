import { FastifyInstance } from "fastify";
import UserRepository from "../repositories/user.repository";

class UserRoutes {
  public async routes(fastify: FastifyInstance, options: any, done: any) {
    fastify.get('/api/users', async (request, reply) => {
      try {
        const users = await new UserRepository().getAll()
        reply.send({users})
      } catch (error) {
        reply.send({message: error.message}).status(500)
      }
      
    })

    fastify.post('/api/users', async(request, reply) => {
      try {
        const user = await new UserRepository().createUser(request.body)
        if(!user) {
          throw new Error('Error creating user')
        }
        reply.send({message: 'User created successfully'})
      } catch (error) {
        reply.send({message: error.message}).status(500)
      }
    })

    done()
  }

  
}

export default new UserRoutes().routes