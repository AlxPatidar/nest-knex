import { BaseModel } from './base.model';
import { UserModel } from './user.model';
import { CommentModel } from './comment.model';
import { Model } from 'objection';

export class PostModel extends BaseModel {
  static tableName = 'posts';

  title: string;
  body: string;
  userId: number;

  user: UserModel;
  comments: CommentModel[];

  static relationMappings = {
    user: {
      modelClass: `${__dirname}/user.model`,
      relation: Model.BelongsToOneRelation,
      join: {
        from: 'posts.userId',
        to: 'users.id',
      },
    },
    comments: {
      modelClass: `${__dirname}/comment.model`,
      relation: Model.HasManyRelation,
      join: {
        from: 'posts.id',
        to: 'commments.id',
      },
    },
  };
}
