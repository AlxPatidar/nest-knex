import * as Knex from 'knex';
import { Logger } from '@nestjs/common';

export async function up(knex: Knex): Promise<any> {
  if (await knex.schema.hasTable('comments')) {
    return;
  }
  Logger.log('Creating comments table');
  return knex.schema.createTable('comments', (table: Knex.TableBuilder) => {
    table
      .increments('id')
      .unsigned()
      .primary();
    table.string('comment');
    table
      .integer('user_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('users')
      .notNullable()
      .onDelete('CASCADE');
    table
      .integer('post_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('posts')
      .notNullable()
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<any> {
  Logger.log('Droping comments table');
  return knex.schema.dropTableIfExists('comments');
}
