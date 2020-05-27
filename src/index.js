import '@babel/register';
import '@babel/polyfill';

import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';

import { keepAlive } from './util/keepAlive';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

// eslint-disable-next-line import/first
import connectDB from './data/connect-db';

require('dotenv').config();

keepAlive();

(async () => {
  await connectDB();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const app = express();

  app.options('*', cors());
  app.use(cors());
  app.get('/ping', (req, res) => res.send('pong'));

  server.applyMiddleware({
    app,
    cors: true,
  });

  // eslint-disable-next-line no-console
  app.listen(process.env.PORT, () => console.log(`Server listening at port ${process.env.PORT}`));
})();
