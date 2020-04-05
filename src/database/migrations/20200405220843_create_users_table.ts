import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('users', (table: Knex.TableBuilder) => {
    table.integer('id');
    table.string('name');
    table.string('user_name');
    table.string('phone');
    table.string('email');
    table.string('website');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('users');
}