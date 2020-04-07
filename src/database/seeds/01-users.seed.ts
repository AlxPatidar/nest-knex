import * as Faker from 'faker';
import { times } from 'lodash';
import { UserModel } from '../models/user.model';
import { Logger } from '@nestjs/common';

const createFakerUser = () => ({
  avatar: Faker.internet.avatar(),
  userName: Faker.name.findName(),
  firstName: Faker.name.firstName(),
  lastName: Faker.name.lastName(),
  email: Faker.internet.email().toLowerCase(),
  phone: Faker.phone.phoneNumberFormat(),
  website: Faker.internet.url(),
});

exports.seed = async (knex) => {
  Logger.log('Starting users table seeder');
  // create 20 user and push into array
  const usersList = times(20, () => createFakerUser());
  // remove all current user from data base if presents
  await UserModel.query(knex).del();
  // insert all user list array into table
  await UserModel.query(knex).insertGraph(usersList);
  Logger.log('Ending users table seeder');
};
