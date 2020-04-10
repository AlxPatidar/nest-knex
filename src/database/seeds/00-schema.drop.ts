import { UserModel } from '../models/user.model';
import { Logger } from '@nestjs/common';
import { CommentModel } from '../models/comment.model';
import { PostModel } from '../models/post.model';

exports.seed = async knex => {
  Logger.log('Starting truncating tables');
  // set foreign key check false
  await knex.raw('SET FOREIGN_KEY_CHECKS = 0');

  if (await knex.schema.hasTable('users')) {
    // remove all current user from data base if presents
    await UserModel.query(knex).truncate();
  }
  if (await knex.schema.hasTable('posts')) {
    // remove all current posts from data base if presents
    await PostModel.query(knex).truncate()
  }
  if (await knex.schema.hasTable('comments')) {
    // remove all current commnets from data base if presents
    await CommentModel.query(knex).truncate();
  }
  // set foreign key check true
  await knex.raw('SET FOREIGN_KEY_CHECKS = 1');

  Logger.log('Ending truncating tables');
};
