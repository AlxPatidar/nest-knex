import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('comments', (table: Knex.TableBuilder) => {
    table.increments('id').unsigned().primary();
    table.string('comment');
    table.integer('user_id').notNullable();
    table.integer('post_id').notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('comments');
}