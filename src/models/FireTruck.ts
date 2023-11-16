import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class FireTruck {
  @PrimaryColumn()
  fire_truck_name?: string;
}
