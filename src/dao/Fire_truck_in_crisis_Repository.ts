import { EntityRepository, Repository } from 'typeorm';
import { Fire_truck_in_crisis } from '../models/Fire_truck_in_crisis';
import {createDatabaseConnection} from '../database/createDatabaseConnection';

@EntityRepository(Fire_truck_in_crisis)
export class Fire_truck_in_crisis_Repository extends Repository<Fire_truck_in_crisis> {
  public async findActiveCrisis(): Promise<Fire_truck_in_crisis | undefined> {
    const crisis = await this.findOne({ where: { crisis_id: 1 } });
    return crisis || undefined;
  }
 
//   async get_fire_trucks(crisisId: number, status: string): Promise<string[]> {
//     const fireTrucks = await this.find({
//       where: {
//         crisis_id: crisisId,
//         fire_truck_status: status
//       },
//       select: ['fire_truck_name']
//     });

//     return fireTrucks.map(ft => ft.fire_truck_name);
//   }
  public async dispatch_fire_truck(crisisId: number, fireTruckName: string): Promise<void> {
    // const connection = await createDatabaseConnection();
    const fireTruckInCrisis = new Fire_truck_in_crisis();
    fireTruckInCrisis.crisis_id = crisisId;
    fireTruckInCrisis.fire_truck_name = fireTruckName;
    //fireTruckInCrisis.status = 'Dispatched'; // Assuming you have a status field

    await this.save(fireTruckInCrisis);
}
}
