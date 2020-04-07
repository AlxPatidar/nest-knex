import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  if (await knex.schema.hasTable('users')) {
    return;
  }
  return knex.schema.createTable('users', (table: Knex.TableBuilder) => {
    table.increments('id').primary();
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