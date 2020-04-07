import { BaseModel } from './base.model';
import { UserModel } from './user.model';
import { CommentModel } from './comment.model';
import { Model } from 'objection';

export class PostModel extends BaseModel {
  static tableName = 'posts';

  title: string;
  body: string;
  userId: number;

  // get user details or post made by user info
  user: UserModel;
  // list of all comments on present post
  comments: CommentModel;

  static relationMappings = {
    // relationship with user
    user: {
      modelClass: `${__dirname}/user.model`,
      relation: Model.BelongsToOneRelation,
      join: {
        from: 'posts.userId',
        to: 'users.id',
      },
    },
    // list out comment on current post
    comments: {
      modelClass: `${__dirname}/comment.model`,
      relation: Model.HasManyRelation,
      join: {
        from: 'posts.id',
        to: 'comments.postId',
      },
    },
  };
}
