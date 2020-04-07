import { Injectable, Inject } from '@nestjs/common';
import { CommentModel } from 'src/database/models/comment.model';
import { ModelClass } from 'objection';

export interface ResponseData {
  readonly success: boolean;
  readonly message: string;
  readonly data: any;
}

@Injectable()
export class CommentsService {
  constructor(
    @Inject('CommentModel') private modelClass: ModelClass<CommentModel>
  ) { }
  // Get all comments with user and post details
  async findAll(): Promise<ResponseData> {
    const comments = await this.modelClass.query()
      .withGraphFetched({
        user: true,
        post: {
          user: true,
        },
      });
    return {
      success: true,
      message: 'Comment details fetch successfully.',
      data: comments,
    };
  }

  // find comment with id and user with posts
  async findById(id: number): Promise<ResponseData> {
    const post = await this.modelClass.query()
      .findById(id)
      .withGraphFetched({
        user: true,
        post: {
          user: true,
        },
      });
    if (post) {
      return {
        success: true,
        message: 'Comment details fetch successfully.',
        data: post,
      };
    } else {
      return {
        success: true,
        message: 'No comment found.',
        data: {},
      };
    }
  }
}
