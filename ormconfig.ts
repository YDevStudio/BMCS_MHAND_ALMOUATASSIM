import { ConnectionOptions } from 'typeorm';
console.log("Using ormconfig.ts for database configuration");

const config: ConnectionOptions = {
  type: 'sqlite',
  database: 'src/database/bmcs_database.db',
  // Change entities path to compiled JavaScript files
  entities: ['dist/src/models/*.js'],
  synchronize: true,
  logging: false
};

export default config;
