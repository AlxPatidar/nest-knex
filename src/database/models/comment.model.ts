import { BaseModel } from './base.model';
import { UserModel } from './user.model';
import { PostModel } from './post.model';
import { Model } from 'objection';

export class CommentModel extends BaseModel {
  static tableName = 'comments';

  comment: string;
  userId: number;
  postId: number;

  user: UserModel;
  post: PostModel;

  static relationMappings = {
    // comment by user
    user: {
      modelClass: `${__dirname}/user.model`,
      relation: Model.BelongsToOneRelation,
      join: {
        from: 'comments.userId',
        to: 'users.id',
      },
    },
    // post detail on which comment made
    post: {
      modelClass: `${__dirname}/post.model`,
      relation: Model.BelongsToOneRelation,
      join: {
        from: 'comments.postId',
        to: 'posts.id',
      },
    },
  };
}
