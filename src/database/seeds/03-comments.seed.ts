import * as Faker from 'faker';
import { times } from 'lodash';
import { Logger } from '@nestjs/common';
import { CommentModel } from '../models/comment.model';

const createFakerComment = () => ({
  comment: Faker.lorem.words(),
  postId: Faker.random.number({
    min: 1,
    max: 50,
  }),
  userId: Faker.random.number({
    min: 1,
    max: 20,
  }),
});

exports.seed = async knex => {
  Logger.log('Starting comments table seeder');
  // create 20 user and push into array
  const commentsList = times(100, () => createFakerComment());
  // insert all posts list array into table
  await CommentModel.query(knex).insertGraph(commentsList);
  Logger.log('Ending comments table seeder');
};
