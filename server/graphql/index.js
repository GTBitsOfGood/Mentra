const { ApolloServer, makeExecutableSchema } = require('apollo-server')
const { typeDefs } = require('./schema')
const Queries = require('./resolvers/Query')
const Mutations = require('./resolvers/Mutation')
const User = require('./resolvers/User')

const MONGO_CONNECTOR_URL = 'http://localhost:6000'

const resolvers = {
	Query: Queries,
	Mutation: Mutations,
	User: User,
}

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
  console.log(`🚀 GraphQL Server ready at ${url}`)
})
