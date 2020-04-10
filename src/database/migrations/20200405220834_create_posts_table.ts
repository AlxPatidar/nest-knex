import * as Knex from 'knex';
import { Logger } from '@nestjs/common';

export async function up(knex: Knex): Promise<any> {
  if (await knex.schema.hasTable('posts')) {
    return;
  }
  Logger.log('Creating posts table');
  return knex.schema.createTable('posts', (table: Knex.TableBuilder) => {
    table
      .increments('id')
      .unsigned()
      .primary();
    table.string('title');
    table.text('body');
    table
      .integer('user_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<any> {
  Logger.log('Droping posts table');
  return knex.schema.dropTableIfExists('posts');
}
