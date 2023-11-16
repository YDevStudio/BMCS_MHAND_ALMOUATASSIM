import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Crisis } from "./Crisis";
import { FireTruck } from "./FireTruck";
import { Route } from "./Route";

@Entity()
export class FireTruckInCrisis {
  @PrimaryColumn()
  crisis_id?: number;

  @PrimaryColumn()
  fire_truck_name?: string;

  @Column()
  route_name?: string;

  @Column()
  fire_truck_status?: string;

  @ManyToOne(() => Crisis)
  @JoinColumn({ name: "crisis_id" })
  crisis?: Crisis;

  @ManyToOne(() => FireTruck)
  @JoinColumn({ name: "fire_truck_name" })
  fireTruck?: FireTruck;

  @ManyToOne(() => Route)
  @JoinColumn({ name: "route_name" })
  route?: Route;
}
