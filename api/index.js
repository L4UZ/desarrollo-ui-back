import { ApolloServer } from 'apollo-server';
import { typeDefs } from './_typeDefs';
import { resolvers } from './_resolvers';

require('dotenv').config();

// eslint-disable-next-line import/first
import connectDB from './_data/connect-db';

// (async () => {
//   try {
//     await connectDB();

//     const server = new ApolloServer({ typeDefs, resolvers });

//     const { url } = await server.listen({ port: process.env.PORT || 4000 });
//     // eslint-disable-next-line no-console
//     console.log(`Server ready at ${url}`);
//   } catch (err) {
//     console.error(err);
//   }
// })();

connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});
exports.handler = server.createHandler();
