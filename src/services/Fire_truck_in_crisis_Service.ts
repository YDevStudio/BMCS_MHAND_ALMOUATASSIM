import { getCustomRepository } from 'typeorm';
import { Fire_truck_in_crisis_Repository } from "../dao/Fire_truck_in_crisis_Repository";
import { interpret } from 'xstate';
import { crisisManagementMachine } from '../stateMachines/crisisManagementMachine';
 import {createDatabaseConnection} from '../database/createDatabaseConnection';



export class Fire_truck_in_crisis_Service {
    private Fire_truck_in_crisis_Repository = getCustomRepository(Fire_truck_in_crisis_Repository);
    private service;
  
    constructor() {
      this.service = interpret(crisisManagementMachine)
        .onTransition((state) => console.log(state.value))
        .start();
    }
    async dispatch_fire_truck(crisisId: number, fireTruckName: string) {
        const connection = await createDatabaseConnection();
        const Fire_truck_in_crisis_Repository1 = getCustomRepository(Fire_truck_in_crisis_Repository);
        // Logic to insert into the Fire_truck_in_crisis table
        // You can use CrisisRepository or directly interact with the database
        // Example:
        await Fire_truck_in_crisis_Repository1.dispatch_fire_truck(crisisId, fireTruckName);
    }
}