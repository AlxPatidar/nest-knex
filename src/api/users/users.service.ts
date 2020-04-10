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
  constructor(@Inject('UserModel') private modelClass: ModelClass<UserModel>) {}

  // user list with list of posts and comments on post
  async findAll(): Promise<ResponseData> {
    const users = await this.modelClass.query().withGraphFetched({
      posts: {
        user: true,
        comments: {
          user: true,
        },
      },
    });
    return {
      success: true,
      message: 'User details fetch successfully.',
      data: users,
    };
  }

  // find one user info by userId with posts data
  async findById(id: number): Promise<ResponseData> {
    const user = await this.modelClass
      .query()
      .findById(id)
      .withGraphFetched({
        posts: {
          user: true,
          comments: true,
        },
      });
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
  // Create user before save encrypt password
  async create(payload) {
    const newUser = await this.modelClass.query().findOne({
      email: payload.email,
    });
    if (!newUser) {
      const identifiers = await this.modelClass.query().insert(payload);
      const createUser = await this.modelClass.query().findById(identifiers.id);
      return {
        success: true,
        message: 'User created successfully.',
        data: createUser,
      };
    } else {
      return {
        success: false,
        message: 'User already exists with this email address!!!',
        data: {},
      };
    }
  }
}
