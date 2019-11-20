const { ApolloServer, makeExecutableSchema } = require('apollo-server')
const { typeDefs } = require('./schema')
const Queries = require('./resolvers/Query')
const Mutations = require('./resolvers/Mutation')

const MONGO_CONNECTOR_URL = 'http://localhost:5000'

const resolvers = {
	Query: {
    readUser: Queries.readUser
  },
	Mutation: {
    updateWorkPreference: Mutations.updateWorkPreference,
    createUser: Mutations.createUser
  }
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
