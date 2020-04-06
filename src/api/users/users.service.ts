import { Injectable, Inject } from '@nestjs/common';
import { UserModel } from 'src/database/models/user.model';
import { ModelClass } from 'objection';

export interface ResponseData {
  readonly success: boolean;
  readonly message: string;
  readonly data: any;
}
@Injectable()
export class UsersService {
  constructor(
    @Inject('UserModel') private modelClass: ModelClass<UserModel>
  ) { }

  // Get all posts
  async findAll(): Promise<ResponseData> {
    const users = await this.modelClass.query();
    return {
      success: true,
      message: 'Post details fetch successfully.',
      data: users,
    };
  }

  // Find post by id
  async findById(id: number): Promise<ResponseData> {
    const user = await this.modelClass.query().findById(id);
    if (user) {
      return {
        success: true,
        message: 'User details fetch successfully.',
        data: user,
      };
    } else {
      return {
        success: true,
        message: 'No user details found.',
        data: {},
      };
    }
  }
}
