import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Crisis } from "./Crisis";
import { Police_vehicle } from "./Police_vehicle";
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

  @ManyToOne(() => Police_vehicle)
  @JoinColumn({ name: "police_vehicle_name" })
  policeVehicle?: Police_vehicle;

  @ManyToOne(() => Route)
  @JoinColumn({ name: "route_name" })
  route?: Route;
}
