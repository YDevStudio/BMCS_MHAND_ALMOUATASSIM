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
  // Static method to log entity details
  static show() {
    console.log("Entity Name: Crisis");
    console.log("Columns:");
    console.log("  crisis_id (PrimaryGeneratedColumn)");
    console.log("  fire_truck_number (Column)");
    console.log("  police_vehicle_number (Column)");
    console.log("  isActive (Column)");
    // Add other properties here as needed
  }
}
