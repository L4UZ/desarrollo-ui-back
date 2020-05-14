import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  passwordHash: String,
});

export const UserModel = mongoose.model('User', userSchema);
