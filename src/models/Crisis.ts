import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Crisis {
  @PrimaryGeneratedColumn()
  crisis_id?: number;

  @Column()
  fire_truck_number?: number;

  @Column()
  police_vehicle_number?: number;
  
  @Column()
  isActive: boolean; // Add the isActive property

  // Other properties...

  constructor() {
    this.isActive = false; // Initialize isActive to false by default
  }
}
