import { Fire_truck_in_crisis } from "../models/Fire_truck_in_crisis"
import { AppDataSource } from "../data-source"
import {Fire_truck} from "../models/Fire_truck"
import {Route} from "../models/Route"
import {Crisis} from "../models/Crisis"
import { getManager , getRepository } from 'typeorm';
import {createDatabaseConnection} from '../database/createDatabaseConnection';
import { createQueryBuilder,getConnection } from "typeorm";
import { Status } from "../Other/Status";

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

  const dispatch_fire_truck = async (_crisis_id: number, fire_truck_name1 : string) => AppDataSource.initialize()
  .then(async () => {
    const connection = await createDatabaseConnection();

    const Fire_truck_in_crisis1 = new Fire_truck_in_crisis();
    Fire_truck_in_crisis1.crisis_id = _crisis_id; 
    Fire_truck_in_crisis1.fire_truck_name = fire_truck_name1;
    Fire_truck_in_crisis1.fire_truck_status = Status[Status.Dispatched];
    await AppDataSource.manager.save(Fire_truck_in_crisis1);


    console.log("Post has been saved: ", Fire_truck_in_crisis1)
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

const get_AllFire_trucks = async () => AppDataSource.initialize()
.then(async () => {
 const connection = await createDatabaseConnection();
 const Fire_truck_in_crisis1 = await createQueryBuilder("Fire_truck_in_crisis")  
 .getMany()// Or .getOne()
//  .then(results => {
//      console.log(results);
//    })
//    .catch(error => {
//      console.error(error);
//    });
return Fire_truck_in_crisis1;
});


const get_fire_trucks = async (_crisis_id : number, status : Status) => AppDataSource.initialize()
.then(async () => {
 const connection = await createDatabaseConnection();
 const Fire_truck_in_crisis1 = await createQueryBuilder("Fire_truck_in_crisis")  
 .where("crisis_id = :id", { id: _crisis_id })
 .andWhere("fire_truck_status = :name", { name: status })
 .getMany()
 return Fire_truck_in_crisis1;

});
// console.log(get_fire_trucks(1,Status.Arrived));
(async()=>{
  get_AllFire_trucks().then(fireTrucks => {
    console.log(fireTrucks[0]);
});
})();

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
const arrive_fire_truck = async (crisis_id: number, fire_truck_name: string): Promise<void> => {
  await AppDataSource.initialize().then(async () => {
      // Check if the fire truck is dispatched
      const connection = await createDatabaseConnection();

     

      // Update the fire truck status to Arrived
      const Fire_truck_in_crisis_Service1 = await getConnection()
          .createQueryBuilder()
          .update(Fire_truck_in_crisis)
          .set({ fire_truck_status: Status.Arrived })
          .where("fire_truck_name = :name", { name: fire_truck_name })
          .andWhere("crisis_id = :id", { id: crisis_id })
          .execute()
          .then(results => {
              console.log(results);
          })
          .catch(error => {
              console.error(error);
          });
  });
};


const block_fire_truck = async (crisis_id: number,fire_truck_name1 : string) => {
  await AppDataSource.initialize()
      .then(async () => {
        const connection = await createDatabaseConnection();
        const Fire_truck_in_crisis_Service1 = await getConnection()
            .createQueryBuilder()
            .update(Fire_truck_in_crisis) 
            .set({
              fire_truck_status: Status[Status.Blocked] 
            })
            .where("fire_truck_name = :name", { name: fire_truck_name1 }) 
            .andWhere("crisis_id = :id", { id: crisis_id })
            .execute()
            .then(results => {
                console.log(results);
              })
              .catch(error => {
                console.error(error);
              });;
      });
};
const breakdown_fire_truck = async (crisis_id: number,fire_truck_name1 : string) => {
  await AppDataSource.initialize()
      .then(async () => {
        const connection = await createDatabaseConnection();
        const Fire_truck_in_crisis_Service1 = await getConnection()
            .createQueryBuilder()
            .update(Fire_truck_in_crisis) 
            .set({
              fire_truck_status: Status[Status.Breakdown] 
            })
            .where("fire_truck_name = :name", { name: fire_truck_name1 }) 
            .andWhere("crisis_id = :id", { id: crisis_id })
            .execute()
            .then(results => {
                console.log(results);
              })
              .catch(error => {
                console.error(error);
              });;
      });
};


   
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
