import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Police_vehicle {
  @PrimaryColumn()
  police_vehicle_name?: string;
}
