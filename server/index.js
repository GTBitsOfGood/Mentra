require('dotenv').config()

const { ApolloServer, makeExecutableSchema } = require('apollo-server')
const { typeDefs } = require('./schema')
const Queries = require('./resolvers/Query')
const Mutations = require('./resolvers/Mutation')
const Candidate = require('./resolvers/Candidate')
const MongoClient = require('mongodb').MongoClient

const mongo = new MongoClient(env.MONGO_URI, { useNewUrlParser: true })

const resolvers = {
  Query: Queries,
  Mutation: Mutations,
  Candidate: Candidate,
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: request => {
    return {
      ...request,
      mongo,
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 GraphQL Server ready at ${url}`)
})
