import { BaseModel } from './base.model';

export class CommentModel extends BaseModel {
  static tableName = 'commnets';

  comment: string;
  userId: number;
}