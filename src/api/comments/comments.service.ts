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
    @Inject('CommentModel') private modelClass: ModelClass<CommentModel>,
  ) {}
  // Get all comments with user and post details
  async findAll(): Promise<ResponseData> {
    const comments = await this.modelClass.query().withGraphFetched({
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
    const post = await this.modelClass
      .query()
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

  // create comment on post
  async createComment(payload): Promise<ResponseData> {
    const comment = await this.modelClass.query().insert(payload);
    return {
      success: true,
      message: 'Comment added to post successfully.',
      data: comment,
    };
  }

  // update post with commentId
  async update(payload): Promise<ResponseData> {
    const comment = await this.modelClass.query().findById(payload.commentId);
    if (comment) {
      const updatedPost = await this.modelClass
        .query()
        .update({
          comment: payload.comment ? payload.comment : comment.comment,
          userId: payload.userId,
        })
        .where({ id: payload.commentId });
      return {
        success: true,
        message: 'Comment details updated successfully.',
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
  async deleteById(commentId: number): Promise<ResponseData> {
    const comment = await this.modelClass
      .query()
      .delete()
      .where({ id: commentId });
    if (comment) {
      return {
        success: true,
        message: 'Comment deleted successfully.',
        data: comment,
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
