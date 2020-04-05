import { BaseModel } from './base.model';

export class UserModel extends BaseModel {
  static tableName = 'users';

  firstName: string;
  lastName: string;
  email: string;
}