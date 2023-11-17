// src/services/CrisisService.ts

import { getCustomRepository } from 'typeorm';
import { CrisisRepository } from '../dao/CrisisRepository';
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

  // Additional service methods...
}
