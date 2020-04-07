import { BaseModel } from './base.model';
import { Model } from 'objection';
import { PostModel } from './post.model';

export class UserModel extends BaseModel {
  static tableName = 'users';

  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  website: string;

  fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  posts: PostModel[];

  static relationMappings = {
    // list of all post on current user
    posts: {
      modelClass: `${__dirname}/post.model`,
      relation: Model.HasManyRelation,
      join: {
        from: 'users.id',
        to: 'posts.id',
      },
    },
  };
}
