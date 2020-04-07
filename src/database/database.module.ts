import { Module, Global } from '@nestjs/common';
import { map } from 'lodash';
import * as Knex from 'knex';
import { Model } from 'objection';

import * as knexConfig from './knex';
import { UserModel } from './models/user.model';
import { PostModel } from './models/post.model';
import { CommentModel } from './models/comment.model';

const models = [UserModel, PostModel, CommentModel];

const modelProvider = map(models, model => {
  return {
    provide: model.name,
    useValue: model,
  };
});

const providers = [
  ...modelProvider,
  {
    provide: 'KnexConnection',
    useFactory: async () => {
      const knex = await Knex(knexConfig);
      Model.knex(knex);
      return knex;
    },
  },
];

@Global()
@Module({
  providers,
  exports: [...providers]
})
export class DatabaseModule { }
