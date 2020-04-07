import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  if (await knex.schema.hasTable('comments')) {
    return;
  }
  return knex.schema.createTable('comments', (table: Knex.TableBuilder) => {
    table.increments('id').primary();
    table.string('title');
    table.text('body');
    table.integer('user_id').references('id').inTable('users');
    table.integer('post_id').references('posts.id');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('comments');
}