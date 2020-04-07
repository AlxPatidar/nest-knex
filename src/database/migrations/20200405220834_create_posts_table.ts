import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('posts', (table: Knex.TableBuilder) => {
    table.increments('id').unsigned().primary();
    table.string('title');
    table.text('body');
    table.integer('user_id');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('posts');
}