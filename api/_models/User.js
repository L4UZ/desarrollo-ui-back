import { UserModel } from '../_data';

export class User {
  static async all() {
    return UserModel.find();
  }
}
