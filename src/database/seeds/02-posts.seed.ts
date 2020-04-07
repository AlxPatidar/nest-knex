import * as Faker from 'faker';
import { times } from 'lodash';
import { Logger } from '@nestjs/common';
import { PostModel } from '../models/post.model';

const createFakerPost = () => ({
  title: Faker.lorem.sentence(),
  body: Faker.lorem.paragraph(),
  userId: Faker.random.number(1, 20),
});

exports.seed = async (knex) => {
  Logger.log('Starting posts table seeder');
  // create 20 user and push into array
  const postsList = times(50, () => createFakerPost());
  // remove all current posts from data base if presents
  await PostModel.query(knex).del();
  // insert all posts list array into table
  await PostModel.query(knex).insertGraph(postsList);
  Logger.log('Ending posts table seeder');
};
