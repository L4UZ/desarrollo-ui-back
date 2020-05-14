import '@babel/register';
import '@babel/polyfill';

// import express from 'express';
// import bodyParser from 'body-parser';
// import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
// import { makeExecutableSchema } from 'graphql-tools';
// import cors from 'cors';
import { ApolloServer } from 'apollo-server';

import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

// eslint-disable-next-line import/first
import connectDB from './data/connect-db';

// const app = express();
// app.use(cors());

require('dotenv').config();

// export const homePath = '/graphiql';

connectDB();

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// });

// app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// app.use(
//   homePath,
//   graphiqlExpress({
//     endpointURL: '/',
//   }),
// );

// export default app;
