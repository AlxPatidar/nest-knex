import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('comments', (table: Knex.TableBuilder) => {
    table.integer('id');
    table.string('title');
    table.text('body');
    table.integer('user_id');
    table.integer('post_id');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('comments');
}