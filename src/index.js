import { ApolloServer } from 'apollo-server';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

require('dotenv').config();

// eslint-disable-next-line import/first
import connectDB from './data/connect-db';

(async () => {
  await connectDB();

  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => {
    // eslint-disable-next-line no-console
    console.log(`Server ready at ${url}`);
  });
})();
