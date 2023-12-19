import { Fire_truck_in_crisis } from "./src/models/Fire_truck_in_crisis"
import { AppDataSource } from "./src/data-source"
import {Fire_truck} from "./src/models/Fire_truck"
import {Route} from "./src/models/Route"
import {Crisis} from "./src/models/Crisis"
import { getManager , getRepository } from 'typeorm';
import {createDatabaseConnection} from './src/database/createDatabaseConnection';
import { createQueryBuilder,getConnection } from "typeorm";
import { Status } from "./src/Other/Status";
/**
 * Insert function
 */
const inserte = async () => AppDataSource.initialize()
  .then(async () => {
    const connection = await createDatabaseConnection();

    const crisis = new Crisis();
    crisis.crisis_id = 2; 
    crisis.fire_truck_number = 2;
    crisis.police_vehicle_number = 2;
    crisis.isActive = true;
    await AppDataSource.manager.save(crisis);


    console.log("Post has been saved: ", crisis)
  })
  .catch((error) => console.log("Error: ", error))
  /**
 * Select function
 */
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
/**
 * Update function
 */ 
const updatee = async () => {
  await AppDataSource.initialize()
      .then(async () => {
          const connection = await createDatabaseConnection();
          const Fire_truck_in_crisis_Service1 = await getConnection()
              .createQueryBuilder()
              .update(Fire_truck_in_crisis) // Target the Fire_truck_in_crisis entity
              .set({
                  fire_truck_status: Status[Status.Arrived] // New fire truck name
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
/**
 * Delete function
 */
const deletee = async () => AppDataSource.initialize()
    .then(async () => {
        const connection = await createDatabaseConnection();
        const Fire_truck_in_crisis_Service1 = await getConnection()
        .createQueryBuilder()
        .delete()
        .from(Fire_truck_in_crisis) 
        .where("crisis_id = :id", { id: 2 }) 
        .execute()
        .then(results => {
            console.log(results);
          })
          .catch(error => {
            console.error(error);
          });;
    });