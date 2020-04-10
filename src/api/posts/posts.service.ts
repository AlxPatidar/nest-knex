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
  constructor(@Inject('PostModel') private modelClass: ModelClass<PostModel>) {}

  // find posts details with comments by id
  async findAll(): Promise<ResponseData> {
    const posts = await this.modelClass.query().withGraphFetched({
      user: true,
      comments: {
        user: true,
      },
    });
    return {
      success: true,
      message: 'Post details fetch successfully.',
      data: posts,
    };
  }

  // Find post details with comments by id
  async findById(id: number): Promise<ResponseData> {
    const post = await this.modelClass
      .query()
      .findById(id)
      .withGraphFetched({
        user: true,
        comments: {
          user: true,
        },
      });
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
  async create(payload): Promise<ResponseData> {
    const post = this.modelClass
      .query()
      .insert(payload)
      .returning('*');
    return {
      success: true,
      message: 'Post created successfully.',
      data: post,
    };
  }

  // update post with postId
  async update(payload): Promise<ResponseData> {
    const post = await this.modelClass.query().findById(payload.postId);
    if (post) {
      const updatedPost = await this.modelClass
        .query()
        .update({
          title: payload.title ? payload.title : post.title,
          userId: payload.userId,
        })
        .where({ id: payload.postId });
      return {
        success: true,
        message: 'Post details updated successfully.',
        data: updatedPost,
      };
    } else {
      return {
        success: true,
        message: 'No post found.',
        data: {},
      };
    }
  }

  // Delete post
  async deleteById(postId: number): Promise<ResponseData> {
    const posts = await this.modelClass
      .query()
      .delete()
      .where({ id: postId });
    if (posts) {
      return {
        success: true,
        message: 'Post deleted successfully.',
        data: posts,
      };
    } else {
      return {
        success: false,
        message: 'No post found.',
        data: {},
      };
    }
  }
}
