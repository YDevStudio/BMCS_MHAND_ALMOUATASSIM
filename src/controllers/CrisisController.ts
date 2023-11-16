// src/controllers/CrisisController.ts

import { Request, Response } from 'express';
import { CrisisService } from '../services/CrisisService';

export class CrisisController {
  private crisisService = new CrisisService();

  public async getActiveCrisis(req: Request, res: Response) {
    const crisis = await this.crisisService.getActiveCrisis();
    res.json(crisis);
  }

  // Additional controller methods...
}
