// src/services/CrisisService.ts

import { getCustomRepository } from 'typeorm';
import { CrisisRepository } from '../dao/CrisisRepository';

export class CrisisService {
  private crisisRepository = getCustomRepository(CrisisRepository);

  public async getActiveCrisis() {
    return await this.crisisRepository.findActiveCrisis();
  }

  // Additional service methods...
}
