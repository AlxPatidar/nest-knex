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
    @Inject('PostModel') private modelClass: ModelClass<CommentModel>
  ) { }
  // Get all posts
  async findAll(): Promise<ResponseData> {
    const posts = await this.modelClass.query();
    return {
      success: true,
      message: 'Comment details fetch successfully.',
      data: posts,
    };
  }

  // Find post by id
  async findById(id: number): Promise<ResponseData> {
    const post = await this.modelClass.query().findById(id);
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
