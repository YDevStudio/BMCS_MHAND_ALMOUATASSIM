// src/services/CrisisService.ts

import { getCustomRepository } from 'typeorm';
import { CrisisRepository } from '../dao/Crisis_Repository';
import { interpret } from 'xstate';
import { crisisManagementMachine } from '../stateMachines/crisisManagementMachine';


export class CrisisService {
  private crisisRepository = getCustomRepository(CrisisRepository);
  private service;

  constructor() {
    this.service = interpret(crisisManagementMachine)
      .onTransition((state) => console.log(state.value))
      .start();
  }
  public async getActiveCrisis() {
    return await this.crisisRepository.findActiveCrisis();
  }
  public get_number_of_fire_truck_required(){
    console.log("SELECT fire_truck_number FROM Crisis WHERE crisis_id = ");
  }
  public get_number_of_police_vehicle_required(){
    console.log("SELECT police_vehicle_number FROM Crisis WHERE crisis_id = ");
  }
  // Additional service methods...
}
