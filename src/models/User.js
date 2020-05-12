import { UserModel } from '../data';

export class User {
  static async all() {
    return UserModel.find();
  }
}
