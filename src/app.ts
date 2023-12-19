import { Fire_truck_in_crisis } from "./models/Fire_truck_in_crisis"
import { AppDataSource } from "./data-source"
import {Fire_truck} from "./models/Fire_truck"
import {Route} from "./models/Route"
import {Crisis} from "./models/Crisis"
 import {createDatabaseConnection} from './database/createDatabaseConnection';

const func = async () => AppDataSource.initialize()
  .then(async () => {
    const connection = await createDatabaseConnection();
    const crisis = new Crisis();
    crisis.crisis_id = 1; // Assuming you have a Crisis entity with an 'id' property
    crisis.fire_truck_number = 1;
    crisis.police_vehicle_number = 1;
    crisis.isActive = true;
    await AppDataSource.manager.save(crisis);

     const fireTruck = new Fire_truck();
    fireTruck.fire_truck_name = 'Fire Truck 1';
    await AppDataSource.manager.save(fireTruck);

    const route = new Route();
    route.route_name = 'Route 1';
    await AppDataSource.manager.save(route);

    const fire_truck_in_crisis1 = new Fire_truck_in_crisis();
    fire_truck_in_crisis1.fire_truck_status = 'Active';

    fire_truck_in_crisis1.crisis = crisis;
    fire_truck_in_crisis1.fireTruck = fireTruck;
    fire_truck_in_crisis1.route = route;

    console.log('Before saving fire_truck_in_crisis1:', fire_truck_in_crisis1); // Add console.log statement

    // Save the entity to the database
    await AppDataSource.manager.save(fire_truck_in_crisis1);

    console.log('fire_truck_in_crisis1 saved successfully'); // Add console.log statement

    // Similarly, you can create and save another instance with different values
    const fire_truck_in_crisis2 = new Fire_truck_in_crisis();
    fire_truck_in_crisis2.crisis_id = 2; // Set the crisis_id to a valid value
    fire_truck_in_crisis2.fire_truck_name = 'Fire Truck 2';
    fire_truck_in_crisis2.route_name = 'Route 2';
    fire_truck_in_crisis2.fire_truck_status = 'Inactive';



  


    console.log("Post has been saved: ", fire_truck_in_crisis2)
  })
  .catch((error) => console.log("Error: ", error))







// import 'reflect-metadata';
import express, { Request, Response } from 'express';
// import { createConnection, getRepository } from 'typeorm';
// import ormConfig from '../ormconfig'; // Adjust the path if needed
// import { Route } from './models/Route'; // Adjust the path as needed
// import { Crisis } from './models/Crisis'; // Adjust the path if needed
// import {Fire_truck_in_crisis} from './models/Fire_truck_in_crisis';
// import {Fire_truck} from './models/Fire_truck';
import { interpret } from "xstate";
import {crisisManagementMachine} from './stateMachines/crisisManagementMachine';
// import {createDatabaseConnection} from './database/createDatabaseConnection';
// import { getCustomRepository } from 'typeorm';
// import { Fire_truck_Repository } from './dao/Fire_truck_Repository';

// ...



const app = express();
const myStateMachine = crisisManagementMachine; // Rename it if needed

// Database connection setup
// export const func = async () => {
//     const connection = await createDatabaseConnection();
//     const fireTruckRepository = getCustomRepository(Fire_truck_Repository);
//     const fireTrucks = await fireTruckRepository.get_fire_trucks();
//     console.log(fireTrucks);
// };
// Create a service for the crisisManagementMachine
const service = interpret(myStateMachine).onTransition((state) => {
    console.log(state.value);
});

// Start the service
service.start();

// Send events to the crisisManagementMachine
console.log('Sending PSC_connection_request...');
service.send('PSC_connection_request');

console.log('Sending FSC_connection_request...');
service.send('FSC_connection_request');

// console.log('Sending state_fire_truck_number/BCMS.set_number_of_fire_truck_required(Integer)...');
// service.send('state_fire_truck_number/BCMS.set_number_of_fire_truck_required(Integer)');

// console.log('Sending state_police_vehicle_number/BCMS.set_number_of_police_vehicle_required(Integer)...');
// service.send('state_police_vehicle_number/BCMS.set_number_of_police_vehicle_required(Integer)');

// console.log('Sending FSC_disagrees_about_fire_truck_route...');
// service.send('FSC_disagrees_about_fire_truck_route');

// console.log('Sending route_for_fire_trucks...');
// service.send('route_for_fire_trucks');

// console.log('Sending FSC_agrees_about_fire_truck_route...');
// service.send('FSC_agrees_about_fire_truck_route');

// console.log('Sending fire_truck_dispatched[BCMS.fire_truck_dispatched_less_than_number_of_fire_truck_required]/BCMS.dispatch_fire_truck(String);^BCMS.enough_fire_trucks_dispatched...');
// service.send('fire_truck_dispatched[BCMS.fire_truck_dispatched_less_than_number_of_fire_truck_required]/BCMS.dispatch_fire_truck(String);^BCMS.enough_fire_trucks_dispatched');
// // Define a route for the root URL
// console.log("tetsss");
app.get('/', async (req, res) => {

   func();
  try {
  
   // service.send('enough_police_vehicles_dispatched[BCMS.police_vehicle_dispatched_greater_than_or_equal_to_number_of_police_vehicle_required]'); 
   // service.send('enough_fire_trucks_dispatched[BCMS.fire_truck_dispatched_greater_than_or_equal_to_number_of_fire_truck_required]'); 
   // service.send('crisis_is_more_severe'); 
   // service.send('enough_police_vehicles_arrived[BCMS.no_more_dispatched_police_vehicles_and_in_All_fire_trucks_arrived]'); 
   
    // const fire_truck_in_crisisRepository = getRepository(Fire_truck_in_crisis);
    // const fireTruckRepository = getRepository(Fire_truck);
    // const routeRepository = getRepository(Route);
    // const crisisRepository = getRepository(Crisis);

    // const crisis = new Crisis();
    // crisis.crisis_id = 1; // Assuming you have a Crisis entity with an 'id' property
    // crisis.fire_truck_number = 1;
    // crisis.police_vehicle_number = 1;
    // crisis.isActive = true;
    // await crisisRepository.save(crisis);

    // const fireTruck = new Fire_truck();
    // fireTruck.fire_truck_name = 'Fire Truck 1';
    // await fireTruckRepository.save(fireTruck);

    // const route = new Route();
    // route.route_name = 'Route 1';
    // await routeRepository.save(route);

    // const fire_truck_in_crisis1 = new Fire_truck_in_crisis();
    // fire_truck_in_crisis1.crisis_id = 1; // Set the crisis_id to a valid value
    // fire_truck_in_crisis1.fire_truck_status = 'Active';

    // fire_truck_in_crisis1.crisis = crisis;
    // fire_truck_in_crisis1.fireTruck = fireTruck;
    // fire_truck_in_crisis1.route = route;

    // console.log('Before saving fire_truck_in_crisis1:', fire_truck_in_crisis1); // Add console.log statement

    // // Save the entity to the database
    // await fire_truck_in_crisisRepository.save(fire_truck_in_crisis1);

    // console.log('fire_truck_in_crisis1 saved successfully'); // Add console.log statement

    // // Similarly, you can create and save another instance with different values
    // const fire_truck_in_crisis2 = new Fire_truck_in_crisis();
    // fire_truck_in_crisis2.crisis_id = 2; // Set the crisis_id to a valid value
    // fire_truck_in_crisis2.fire_truck_name = 'Fire Truck 2';
    // fire_truck_in_crisis2.route_name = 'Route 2';
    // fire_truck_in_crisis2.fire_truck_status = 'Inactive';

    // Set related entities if needed for the second instance as well
    // ...

    // Save the second entity to the database
    // await fire_truck_in_crisisRepository.save(fire_truck_in_crisis2)
    res.send('New fire_truck_in_crisis to the database.');
  } catch (error) {
    console.error('Error adding the Fire_truck_in_crisis:', error); // Add console.error statement
    res.status(500).send('Error adding the Fire_truck_in_crisis.');
  }
});

// app.get('/add_Fire_truck_in_crisis', async (req: Request, res: Response) => {
    
// });
// // Route for adding a new Route entity
// app.get('/add-route', async (req: Request, res: Response) => {
//     try {
//         // Create a new Route instance
//         const route = new Route();
//         route.route_name = 'New Route';

//         // Save the new route
//         const routeRepository = getRepository(Route);
//         await routeRepository.save(route);

//         res.send('New route added to the database.');
//     } catch (error) {
//         res.status(500).send('Error adding the route.');
//     }
// });
// // Route to get all Route entities
// app.get('/routes', async (req: Request, res: Response) => {
//   try {
//       const routeRepository = getRepository(Route);
//       const routes = await routeRepository.find();
//       res.json(routes);
//   } catch (error) {
//       res.status(500).send('Error retrieving routes.');
//   }
// });
// // Route for adding three new Crisis entities
// app.get('/add-crisis', async (req: Request, res: Response) => {
//   try {
//       const crisisRepository = getRepository(Crisis);

//       // Create and save the first Crisis
//       const crisis1 = new Crisis();
//       crisis1.fire_truck_number = 5;
//       crisis1.police_vehicle_number = 3;
//       crisis1.isActive = true;
//       await crisisRepository.save(crisis1);

//       // Create and save the second Crisis
//       const crisis2 = new Crisis();
//       crisis2.fire_truck_number = 4;
//       crisis2.police_vehicle_number = 2;
//       crisis2.isActive = false;
//       await crisisRepository.save(crisis2);

//       // Create and save the third Crisis
//       const crisis3 = new Crisis();
//       crisis3.fire_truck_number = 6;
//       crisis3.police_vehicle_number = 4;
//       crisis3.isActive = true;
//       await crisisRepository.save(crisis3);

//       res.send('Three Crisis records added to the database.');
//   } catch (error) {
//       res.status(500).send('Error adding Crisis records.');
//   }
// });







export default app;
