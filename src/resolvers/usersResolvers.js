import { hash, genSalt, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { pick } from 'lodash';

import { UserModel } from '../data';

export const usersResolvers = {
  Mutation: {
    signUp: async (_, { user }) => {
      const salt = await genSalt(10);
      const passwordHash = await hash(user.password, salt);
      const userToSave = { ...pick(user, ['email', 'firstName', 'lastName']), passwordHash };
      const [createdUser] = await UserModel.create([userToSave]);

      const jwtPayload = { user: pick(createdUser, ['email', 'firstName', 'lastName']) };
      const jwt = sign(jwtPayload, process.env.JWT_SECRET, { expiresIn: '1d' });
      return jwt;
    },
    signIn: async (_, { credentials: { email, password } }) => {
      const userInDb = await UserModel.findOne({ email });
      const isPasswordCorrect = await compare(password, userInDb.passwordHash);

      if (!isPasswordCorrect) return 'Wrong email/password';

      const jwtPayload = { user: pick(userInDb, ['email', 'firstName', 'lastName']) };
      const jwt = sign(jwtPayload, process.env.JWT_SECRET, { expiresIn: '1d' });
      return jwt;
    },
  },
};
