import { Fire_truck_in_crisis } from "../models/Fire_truck_in_crisis"
import { AppDataSource } from "../data-source"
import {Fire_truck} from "../models/Fire_truck"
import {Route} from "../models/Route"
import {Crisis} from "../models/Crisis"
import { getManager , getRepository } from 'typeorm';
import {createDatabaseConnection} from '../database/createDatabaseConnection';
import { createQueryBuilder,getConnection } from "typeorm";

const deletee = async () => AppDataSource.initialize()
    .then(async () => {
        const connection = await createDatabaseConnection();
        const Fire_truck_in_crisis_Service1 = await getConnection()
        .createQueryBuilder()
        .delete()
        .from(Fire_truck_in_crisis) // Replace with your entity
        .where("crisis_id = :id", { id: 2 }) // Specify the ID to delete
        .execute()
        .then(results => {
            console.log(results);
          })
          .catch(error => {
            console.error(error);
          });;
    });

const updatee = async () => {
    await AppDataSource.initialize()
        .then(async () => {
            const connection = await createDatabaseConnection();
            const Fire_truck_in_crisis_Service1 = await getConnection()
                .createQueryBuilder()
                .update(Fire_truck_in_crisis) // Target the Fire_truck_in_crisis entity
                .set({
                    fire_truck_name: "Fire Truck 2" // New fire truck name
                })
                .where("crisis_id = :id", { id: 1 }) // Specify the condition
                .execute()
                .then(results => {
                    console.log(results);
                  })
                  .catch(error => {
                    console.error(error);
                  });;
        });
};
    

 
 const selecte = async () => AppDataSource.initialize()
   .then(async () => {
    const connection = await createDatabaseConnection();
    const Fire_truck_in_crisis1 = await createQueryBuilder("Fire_truck_in_crisis")  
    .where("crisis_id = :id", { id: 1 })
    .andWhere("fire_truck_name = :name", { name: "Fire Truck 1" })
    .getMany()// Or .getOne()
    .then(results => {
        console.log(results);
      })
      .catch(error => {
        console.error(error);
      });
  
});
const inserte = async () => AppDataSource.initialize()
  .then(async () => {
    const connection = await createDatabaseConnection();
    // const crisis = new Crisis();
    // crisis.crisis_id = 1; // Assuming you have a Crisis entity with an 'id' property
    // crisis.fire_truck_number = 1;
    // crisis.police_vehicle_number = 1;
    // crisis.isActive = true;
    // await AppDataSource.manager.save(crisis);

    //  const fireTruck = new Fire_truck();
    // fireTruck.fire_truck_name = 'Fire Truck 1';
    // await AppDataSource.manager.save(fireTruck);

    // const route = new Route();
    // route.route_name = 'Route 1';
    // await AppDataSource.manager.save(route);

    // const fire_truck_in_crisis1 = new Fire_truck_in_crisis();
    // fire_truck_in_crisis1.fire_truck_status = 'Active';

    // fire_truck_in_crisis1.crisis = crisis;
    // fire_truck_in_crisis1.fireTruck = fireTruck;
    // fire_truck_in_crisis1.route = route;

    // console.log('Before saving fire_truck_in_crisis1:', fire_truck_in_crisis1); // Add console.log statement

    // // Save the entity to the database
    // await AppDataSource.manager.save(fire_truck_in_crisis1);

    // console.log('fire_truck_in_crisis1 saved successfully'); // Add console.log statement

    // // Similarly, you can create and save another instance with different values
    // const fire_truck_in_crisis2 = new Fire_truck_in_crisis();
    // fire_truck_in_crisis2.crisis_id = 2; // Set the crisis_id to a valid value
    // fire_truck_in_crisis2.fire_truck_name = 'Fire Truck 2';
    // fire_truck_in_crisis2.route_name = 'Route 2';
    // fire_truck_in_crisis2.fire_truck_status = 'Inactive';

    const newFireTruck = new Fire_truck();
    newFireTruck.fire_truck_name = "Fire Truck 2";
    await AppDataSource.manager.save(newFireTruck);

  


    console.log("Post has been saved: ", newFireTruck)
  })
  .catch((error) => console.log("Error: ", error))


// import { getCustomRepository } from 'typeorm';
// import { Fire_truck_in_crisis_Repository } from "../dao/Fire_truck_in_crisis_Repository";
// import { interpret } from 'xstate';
// import { crisisManagementMachine } from '../stateMachines/crisisManagementMachine';
//  import {createDatabaseConnection} from '../database/createDatabaseConnection';

 
 
// export class Fire_truck_in_crisis_Service {
//     private Fire_truck_in_crisis_Repository = getCustomRepository(Fire_truck_in_crisis_Repository);
//     private service;
  
//     constructor() {
//       this.service = interpret(crisisManagementMachine)
//         .onTransition((state) => console.log(state.value))
//         .start();
//     }
//     async dispatch_fire_truck(crisisId: number, fireTruckName: string) {
//         const connection = await createDatabaseConnection();
//         const Fire_truck_in_crisis_Repository1 = getCustomRepository(Fire_truck_in_crisis_Repository);
//         // Logic to insert into the Fire_truck_in_crisis table
//         // You can use CrisisRepository or directly interact with the database
//         // Example:
//         await Fire_truck_in_crisis_Repository1.dispatch_fire_truck(crisisId, fireTruckName);
//     }
// }

// const test =  async () => {
//     const connection = await createDatabaseConnection();
//     const Fire_truck_in_crisis_Service1 = new Fire_truck_in_crisis_Service();
//     console.log("test");
//  await Fire_truck_in_crisis_Service1.dispatch_fire_truck(2, "Fire Truck 2");
//  console.log("test");
//  };
// test();
// func1();
