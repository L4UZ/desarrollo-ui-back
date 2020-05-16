import '@babel/register';
import '@babel/polyfill';

import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

// eslint-disable-next-line import/first
import connectDB from './data/connect-db';

require('dotenv').config();

(async () => {
  await connectDB();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const app = express();

  server.applyMiddleware({ app, cors: { origin: '*', allowedHeaders: '*', methods: '*' } });

  // eslint-disable-next-line no-console
  app.listen(process.env.PORT, () => console.log(`Server listening at port ${process.env.PORT}`));
})();
