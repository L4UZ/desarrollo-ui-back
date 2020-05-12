import { ApolloServer } from 'apollo-server';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

require('dotenv').config();

// eslint-disable-next-line import/first
import connectDB from './data/connect-db';

(async () => {
  try {
    await connectDB();

    const server = new ApolloServer({ typeDefs, resolvers });

    const { url } = await server.listen();
    // eslint-disable-next-line no-console
    console.log(`Server ready at ${url}`);
  } catch (err) {
    console.error(err);
  }
})();
