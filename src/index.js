import '@babel/register';
import '@babel/polyfill';

import { ApolloServer } from 'apollo-server';

import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

// eslint-disable-next-line import/first
import connectDB from './data/connect-db';

require('dotenv').config();

connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  cors: { allowedHeaders: '*', methods: '*', origin: '*' },
});

server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`Server ready at ${url}`);
});
