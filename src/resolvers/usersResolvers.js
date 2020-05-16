import * as session from '../logic/session';

export const usersResolvers = {
  Mutation: {
    signUp: (_, { user }) => session.signUp(user),
    signIn: (_, { credentials: { email, password } }) => session.signIn(email, password),
  },
};
