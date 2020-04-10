import * as Faker from 'faker';
import { times } from 'lodash';
import { Logger } from '@nestjs/common';
import { PostModel } from '../models/post.model';
import { CommentModel } from '../models/comment.model';

const createFakerPost = () => ({
  title: Faker.lorem.sentence(),
  body: Faker.lorem.paragraph(),
  userId: Faker.random.number({
    min: 1,
    max: 20,
  }),
});

exports.seed = async knex => {
  Logger.log('Starting posts table seeder');
  // create 20 user and push into array
  const postsList = times(50, () => createFakerPost());
  // insert all posts list array into table
  await PostModel.query(knex).insertGraph(postsList);
  Logger.log('Ending posts table seeder');
};
