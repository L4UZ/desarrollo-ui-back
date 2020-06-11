import * as session from '../logic/session';

export const usersResolvers = {
  Query: {
    me: (_, { token }) => session.authFilter(token).user,
  },
  Mutation: {
    signUp: (_, { user }) => session.signUp(user),
    signIn: (_, { credentials: { email, password } }) => session.signIn(email, password),
  },
};
