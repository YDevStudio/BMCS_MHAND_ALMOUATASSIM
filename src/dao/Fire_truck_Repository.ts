
  import { EntityRepository, Repository } from 'typeorm';
import { Fire_truck} from '../models/Fire_truck';
console.log("test");

@EntityRepository(Fire_truck)
export class Fire_truck_Repository extends Repository<Fire_truck> {

 
  async get_fire_trucks(): Promise<string[]> {
    const fireTrucks = await this.find({
      select: ['fire_truck_name']
    });
    

    return fireTrucks.map(ft => ft.fire_truck_name).filter(name => name !== undefined) as string[];
  }
}
