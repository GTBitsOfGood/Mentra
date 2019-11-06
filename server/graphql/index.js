const { ApolloServer, makeExecutableSchema } = require('apollo-server')
const { typeDefs } = require('./schema')

const MONGO_CONNECTOR_URL = 'http://name.domain'


const resolvers = {}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: request => {
    return {
      ...request,
      MONGO_CONNECTOR_URL
    }
  }
});

server.listen().then(({ url}) => {
  console.log(`🚀  Server ready at ${url}`)
})
