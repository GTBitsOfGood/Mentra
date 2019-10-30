const { ApolloServer, makeExecutableSchema } = require('apollo-server');
const { typeDefs } = require('./typeDefs');

resolvers = {}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // TODO: Auth payload from auth headers goes into context
});
