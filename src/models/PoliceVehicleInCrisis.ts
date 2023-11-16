import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Crisis } from "./Crisis";
import { PoliceVehicle } from "./PoliceVehicle";
import { Route } from "./Route";

@Entity()
export class PoliceVehicleInCrisis {
  @PrimaryColumn()
  crisis_id?: number;

  @PrimaryColumn()
  police_vehicle_name?: string;

  @Column()
  route_name?: string;

  @Column()
  police_vehicle_status?: string;

  @ManyToOne(() => Crisis)
  @JoinColumn({ name: "crisis_id" })
  crisis?: Crisis;

  @ManyToOne(() => PoliceVehicle)
  @JoinColumn({ name: "police_vehicle_name" })
  policeVehicle?: PoliceVehicle;

  @ManyToOne(() => Route)
  @JoinColumn({ name: "route_name" })
  route?: Route;
}
