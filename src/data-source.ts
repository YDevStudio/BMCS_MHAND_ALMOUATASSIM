import "reflect-metadata"
import { DataSource } from "typeorm"
import { Fire_truck_in_crisis } from "./models/Fire_truck_in_crisis"
import { Route } from "./models/Route"
import { Crisis } from "./models/Crisis"
import {Fire_truck} from "./models/Fire_truck"

// import { Category } from "./entity/Category"


  export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/database/bmcs_database.db", // Specify the path to your SQLite database file.
    synchronize: true,
    logging: false,
    entities: [Fire_truck_in_crisis,Route,Crisis,Fire_truck],
    subscribers: [],
    migrations: [],
  });
  