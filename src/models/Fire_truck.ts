import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Fire_truck {
  @PrimaryColumn()
  fire_truck_name?: string;
}
