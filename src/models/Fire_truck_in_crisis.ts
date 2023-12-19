import { Crisis } from "./Crisis";
import { Fire_truck } from "./Fire_truck";
import { Route } from "./Route";

// @Entity()
// export class Fire_truck_in_crisis {
//   @PrimaryColumn()
//   crisis_id?: number;

//   @PrimaryColumn()
//   fire_truck_name?: string;

//   @Column()
//   route_name?: string;

//   @Column()
//   fire_truck_status?: string;

//   // @ManyToOne(() => Crisis)
//   // @JoinColumn({ name: "crisis_id" })
//   // crisis?: Crisis;

//   // @ManyToOne(() => Fire_truck)
//   // @JoinColumn({ name: "fire_truck_name" })
//   // fireTruck?: Fire_truck;

//   // @ManyToOne(() => Route)
//   // @JoinColumn({ name: "route_name" })
//   // route?: Route;
// }
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from "typeorm"

@Entity()
export class Fire_truck_in_crisis {
  @PrimaryGeneratedColumn()
  crisis_id?: number

  @Column()
  fire_truck_name?: string

  @Column()
  route_name?: string;

  @Column()
  fire_truck_status?: string;

  @ManyToOne(() => Crisis)
  @JoinColumn({ name: "crisis_id" })
  crisis?: Crisis;

  @ManyToOne(() => Fire_truck)
  @JoinColumn({ name: "fire_truck_name" })
  fireTruck?: Fire_truck;

  @ManyToOne(() => Route)
  @JoinColumn({ name: "route_name" })
  route?: Route;

  // @Column("text")
  // text: string

  // @ManyToMany((type) => Category)
  // @JoinTable()
  // categories: Category[]
}