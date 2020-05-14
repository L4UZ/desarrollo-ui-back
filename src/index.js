import '@babel/register';
import '@babel/polyfill';

import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import cors from 'cors';

import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

// eslint-disable-next-line import/first
import connectDB from './data/connect-db';

const app = express();
app.use(cors());

require('dotenv').config();

export const homePath = '/graphiql';

connectDB();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use(
  homePath,
  graphiqlExpress({
    endpointURL: '/',
  }),
);

export default app;
