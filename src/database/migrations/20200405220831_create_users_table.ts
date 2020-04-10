import * as Knex from 'knex';
import { Logger } from '@nestjs/common';

export async function up(knex: Knex): Promise<any> {
  if (await knex.schema.hasTable('users')) {
    return;
  }
  Logger.log('Creating users table');
  return knex.schema.createTable('users', (table: Knex.TableBuilder) => {
    table
      .increments('id')
      .unsigned()
      .primary();
    table.string('avatar');
    table.string('user_name');
    table.string('first_name');
    table.string('last_name');
    table.string('phone');
    table.string('email').unique();
    table.string('website');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<any> {
  Logger.log('Droping users table');
  return knex.schema.dropTableIfExists('users');
}
