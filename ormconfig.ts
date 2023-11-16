import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'sqlite',
  database: 'src/database/bmcs_database.db',
  // Change entities path to compiled JavaScript files
  entities: ['dist/models/**/*.js'],
  synchronize: true,
  logging: false
};

export default config;
