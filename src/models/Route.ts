import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Route {
  @PrimaryColumn()
  route_name?: string;
}
