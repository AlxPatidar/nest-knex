import * as Dotenv from 'dotenv';
import * as path from 'path';
Dotenv.config({ path: '../../.env' });

import { knexSnakeCaseMappers } from 'objection';
import { Logger } from '@nestjs/common';

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      // filename: './dev.mysql',
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || '',
      database: process.env.MYSQL_DB || 'knex_mysql',
    },
    migrations: {
      extension: 'ts',
      tableName: 'migrations',
      directory: path.join(__dirname, 'migrations'),
      stub: path.join(__dirname, 'migrations', 'migration.stub'),
      timezone: 'UTC',
    },
    seeds: {
      directory: path.join(__dirname, '/seeds'),
      loadExtensions: ['.ts'],
      stub: path.join(__dirname, '/seeds/seed.stub'),
    },
    ...knexSnakeCaseMappers(),
  },
  staging: {
    client: 'mysql2',
    connection: {
      database: process.env.MYSQL_DB,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
    },
    ...knexSnakeCaseMappers(),
  },
  production: {
    client: 'mysql2',
    connection: {
      database: process.env.MYSQL_DB,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
    },
    ...knexSnakeCaseMappers(),
  },
}[process.env.NODE_ENV || 'development'];

Logger.log(
  `Will connect to mysql://${process.env.MYSQL_HOST}@${process.env.MYSQL_USER}/${process.env.MYSQL_DB}`,
);
