import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class PoliceVehicle {
  @PrimaryColumn()
  police_vehicle_name?: string;
}
