// Import other necessary dependencies

import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import ormConfig from '../ormconfig'; // Adjust the path if needed

// Create Express app
const app = express();

// ... (add middleware and routes as needed)

// Create database connection
createConnection(ormConfig)
  .then(connection => {
    console.log('Database connected successfully');
    // You can also set up additional things dependent on the database here

    // Start the Express app after the database connection is established
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('TypeORM connection error: ', error);
  });

// Export the app
export default app;
