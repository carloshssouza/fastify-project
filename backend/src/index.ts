import Fastity, { FastifyInstance } from "fastify"
import UserRoutes from './routes/user.routes'
import dotenv from 'dotenv'
import database from './repositories/database/config'
dotenv.config()

const app: FastifyInstance = Fastity(
  {logger: true}
)

database.connect()
app.register(UserRoutes)

app.listen({port: parseInt(process.env.PORT)}, (err, address) => {
  if(err) {
    app.log.error(err)
    process.exit(1)
  }
  app.log.info(`server listening on ${address}`)
})