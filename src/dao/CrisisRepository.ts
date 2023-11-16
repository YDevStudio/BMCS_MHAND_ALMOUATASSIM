import { EntityRepository, Repository } from 'typeorm';
import { Crisis } from '../models/Crisis';

@EntityRepository(Crisis)
export class CrisisRepository extends Repository<Crisis> {
  public async findActiveCrisis(): Promise<Crisis | undefined> {
    const crisis = await this.findOne({ where: { isActive: true } });
    return crisis || undefined;
  }
}
