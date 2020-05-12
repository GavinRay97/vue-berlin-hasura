import * as bcrypt from 'bcryptjs'
import * as Fastify from 'fastify'
import { FastifyInstance } from 'fastify'
import { getSdk } from './graphqlRequestSdk'
import { GraphQLClient } from 'graphql-request'
import { generateJWT } from './auth'

const requestClient = new GraphQLClient('http://localhost:8080/v1/graphql', {
  headers: { 'X-Hasura-Admin-Secret': 'mysecret' },
})
const client = getSdk(requestClient)

const fastify: FastifyInstance = Fastify({
  logger: true,
  trustProxy: true,
})

fastify.post('/signup', async (req, res) => {
  const { username, password } = req.body.input
  const hashedPassword = await bcrypt.hash(password, 10)
  const { insert_user_one } = await client.createUser({
    username,
    password: hashedPassword,
  })
  return res.send(insert_user_one)
})

fastify.post('/login', async (req, res) => {
  const { username, password } = req.body.input
  const query = await client.findUserByUsername({ username })
  const [user] = query.user
  const validPassword = await bcrypt.compare(password, user.password)
  if (!validPassword) return res.status(401).send({ message: 'Invalid' })
  const token = generateJWT(user)
  return res.send({ token })
})

// Google Cloud Run will set this environment variable for you, so
// you can also use it to detect if you are running in Cloud Run
const IS_GOOGLE_CLOUD_RUN = process.env.K_SERVICE !== undefined
// You must listen on all IPV4 addresses in Cloud Run
const address = IS_GOOGLE_CLOUD_RUN ? '0.0.0.0' : undefined
// You must listen on the port Cloud Run provides
const port = process.env.PORT || 3000

async function start(server, address) {
  const URL = await server.listen(port, address)
  console.log(`Listening on ${URL}`)
}

start(fastify, address).catch((err) => {
  console.error(err)
  process.exit(1)
})
