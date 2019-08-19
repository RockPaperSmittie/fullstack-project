import Koa = require('koa')
const dotenv = require('dotenv')
const passport = require('koa-passport')
const Auth0Strategy = require('passport-auth0')
import jwt = require('koa-jwt')
import Photon from '@generated/photon'
import { ApolloServer, gql } from 'apollo-server-koa'
import { resolvers } from './resolvers'
import { IResolvers } from 'graphql-tools';
import { importSchema } from 'graphql-import'
const authRouter = require('./routes/auth')

const photon = new Photon()
const app = new Koa()
const port = process.env.PORT || 3000

dotenv.config()

const strategy = new Auth0Strategy({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  callbackURL: process.env.AUTH0_CLIENT_URL || 'http://localhost:3000/callback',
  state: false
},
  (accessToken: any, refreshToken: any, extraParams: any, profile: any, done: any) => {
    // JWT TOKEN
    console.log(extraParams.id_token)

    // console.log(profile)
    return done(null, profile)
})

passport.serializeUser(function(user: any, done: any) {
  done(null, user);
});

passport.deserializeUser(function(user: any, done: any) {
  done(null, user);
});

passport.use(strategy)

app.context.photon = photon

// app.use(jwt({secret: 'whatIsLoveBabyDontHurtMe'}))
app.use(passport.initialize())
app.use(authRouter.routes())

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