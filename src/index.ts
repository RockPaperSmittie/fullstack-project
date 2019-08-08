import Koa = require('koa')
import Photon from '@generated/photon'
import { ApolloServer, gql } from 'apollo-server-koa'
import { resolvers } from './resolvers'
import { IResolvers } from 'graphql-tools';
import { importSchema } from 'graphql-import'

const photon = new Photon()
const app = new Koa()
const port = process.env.PORT || 3000

app.context.photon = photon

const typeDefs = importSchema('src/schema/schema.graphql')

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers as IResolvers,
  context: { photon },
})

server.applyMiddleware({ app })

app.listen({ port }, () => {
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
})