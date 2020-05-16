import { genSalt, hash, compare } from 'bcryptjs';
import { pick } from 'lodash';
import { sign, verify } from 'jsonwebtoken';

import { UserModel } from '../data';

export const signUp = async user => {
  const salt = await genSalt(10);
  const passwordHash = await hash(user.password, salt);
  const userToSave = { ...pick(user, ['email', 'firstName', 'lastName']), passwordHash };
  const [createdUser] = await UserModel.create([userToSave]);

  const jwtPayload = { user: pick(createdUser, ['email', 'firstName', 'lastName']) };
  const jwt = sign(jwtPayload, process.env.JWT_SECRET, { expiresIn: '1d' });
  return jwt;
};

export const signIn = async (email, password) => {
  const userInDb = await UserModel.findOne({ email });
  const isPasswordCorrect = await compare(password, userInDb.passwordHash);

  if (!isPasswordCorrect) return 'Wrong email/password';

  const jwtPayload = { user: pick(userInDb, ['email', 'firstName', 'lastName']) };
  const jwt = sign(jwtPayload, process.env.JWT_SECRET, { expiresIn: '1d' });
  return jwt;
};

export const authFilter = async token => {
  const data = await verify(token, process.env.JWT_SECRET);
  console.log(data);
  return data;
};
