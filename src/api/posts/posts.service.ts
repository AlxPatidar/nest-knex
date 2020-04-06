import { get, map } from 'lodash';
import { Injectable, Inject } from '@nestjs/common';
import { ModelClass } from 'objection';
import { PostModel } from 'src/database/models/post.model';

export interface ResponseData {
  readonly success: boolean;
  readonly message: string;
  readonly data: any;
}
@Injectable()
export class PostsService {
  constructor(
    @Inject('PostModel') private modelClass: ModelClass<PostModel>
  ) { }

  // Get all posts
  async findAll(): Promise<ResponseData> {
    const posts = await this.modelClass.query();
    return {
      success: true,
      message: 'Post details fetch successfully.',
      data: posts,
    };
  }

  // Find post by id
  async findById(id: number): Promise<ResponseData> {
    const post = await this.modelClass.query().findById(id);
    if (post) {
      return {
        success: true,
        message: 'Post details fetch successfully.',
        data: post,
      };
    } else {
      return {
        success: true,
        message: 'No post found.',
        data: {},
      };
    }
  }

  // create post with user id
  async create(payload: Partial<PostModel>): Promise<ResponseData> {
    const post = this.modelClass.query()
      .insert(payload)
      .returning('*');
    return {
      success: true,
      message: 'Post created successfully.',
      data: post,
    };
  }
}
