import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('posts', (table: Knex.TableBuilder) => {
    table.integer('id');
    table.string('title');
    table.string('body');
    table.integer('user_id');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('posts');
}