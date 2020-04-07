import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  if (await knex.schema.hasTable('posts')) {
    return;
  }
  return knex.schema.createTable('posts', (table: Knex.TableBuilder) => {
    table.increments('id').unsigned().primary();
    table.string('title');
    table.text('body');
    table.integer('user_id').references('users.id');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('posts');
}