import { BaseModel } from './base.model';

export class UserModel extends BaseModel {
  static tableName = 'users';

  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  website: string;
}
