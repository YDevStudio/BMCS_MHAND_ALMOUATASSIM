import { ConnectionOptions, createConnection, Connection } from 'typeorm';
import ormconfig from '../../ormconfig'; // Import your ormconfig.ts file

export const createDatabaseConnection = async (): Promise<Connection> => {
  const connection = await createConnection(ormconfig as ConnectionOptions); // Use the imported configuration
  return connection;
};
