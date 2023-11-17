import 'reflect-metadata';
import express, { Request, Response } from 'express';
import { createConnection, getRepository } from 'typeorm';
import ormConfig from '../ormconfig'; // Adjust the path if needed
import { Route } from './models/Route'; // Adjust the path as needed
import { Crisis } from './models/Crisis'; // Adjust the path if needed

const app = express();

// Database connection setup
createConnection(ormConfig).then(connection => {
    console.log('Database connected successfully');
}).catch(error => {
    console.error('TypeORM connection error: ', error);
});
// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, your server is up and running!');
});
// Route for adding a new Route entity
app.get('/add-route', async (req: Request, res: Response) => {
    try {
        // Create a new Route instance
        const route = new Route();
        route.route_name = 'New Route';

        // Save the new route
        const routeRepository = getRepository(Route);
        await routeRepository.save(route);

        res.send('New route added to the database.');
    } catch (error) {
        res.status(500).send('Error adding the route.');
    }
});
// Route to get all Route entities
app.get('/routes', async (req: Request, res: Response) => {
  try {
      const routeRepository = getRepository(Route);
      const routes = await routeRepository.find();
      res.json(routes);
  } catch (error) {
      res.status(500).send('Error retrieving routes.');
  }
});
// Route for adding three new Crisis entities
app.get('/add-crisis', async (req: Request, res: Response) => {
  try {
      const crisisRepository = getRepository(Crisis);

      // Create and save the first Crisis
      const crisis1 = new Crisis();
      crisis1.fire_truck_number = 5;
      crisis1.police_vehicle_number = 3;
      crisis1.isActive = true;
      await crisisRepository.save(crisis1);

      // Create and save the second Crisis
      const crisis2 = new Crisis();
      crisis2.fire_truck_number = 4;
      crisis2.police_vehicle_number = 2;
      crisis2.isActive = false;
      await crisisRepository.save(crisis2);

      // Create and save the third Crisis
      const crisis3 = new Crisis();
      crisis3.fire_truck_number = 6;
      crisis3.police_vehicle_number = 4;
      crisis3.isActive = true;
      await crisisRepository.save(crisis3);

      res.send('Three Crisis records added to the database.');
  } catch (error) {
      res.status(500).send('Error adding Crisis records.');
  }
});







export default app;
