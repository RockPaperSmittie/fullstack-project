const Koa = require('koa')
const { ApolloServer, gql } = require('apollo-server-koa')

const port = process.env.PORT || 3000

// dummy schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`

// dummy resolver for the shema
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

const app = new Koa()

server.applyMiddleware({ app })

app.listen({ port }, () => {
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
})