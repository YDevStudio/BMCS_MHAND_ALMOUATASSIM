"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const ormconfig_1 = __importDefault(require("../ormconfig")); // Adjust the path if needed
const Route_1 = require("./models/Route"); // Adjust the path as needed
const Crisis_1 = require("./models/Crisis"); // Adjust the path if needed
const app = (0, express_1.default)();
// Database connection setup
(0, typeorm_1.createConnection)(ormconfig_1.default).then(connection => {
    console.log('Database connected successfully');
}).catch(error => {
    console.error('TypeORM connection error: ', error);
});
// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, your server is up and running!');
});
// Route for adding a new Route entity
app.get('/add-route', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Create a new Route instance
        const route = new Route_1.Route();
        route.route_name = 'New Route';
        // Save the new route
        const routeRepository = (0, typeorm_1.getRepository)(Route_1.Route);
        yield routeRepository.save(route);
        res.send('New route added to the database.');
    }
    catch (error) {
        res.status(500).send('Error adding the route.');
    }
}));
// Route to get all Route entities
app.get('/routes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const routeRepository = (0, typeorm_1.getRepository)(Route_1.Route);
        const routes = yield routeRepository.find();
        res.json(routes);
    }
    catch (error) {
        res.status(500).send('Error retrieving routes.');
    }
}));
// Route for adding three new Crisis entities
app.get('/add-crisis', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const crisisRepository = (0, typeorm_1.getRepository)(Crisis_1.Crisis);
        // Create and save the first Crisis
        const crisis1 = new Crisis_1.Crisis();
        crisis1.fire_truck_number = 5;
        crisis1.police_vehicle_number = 3;
        crisis1.isActive = true;
        yield crisisRepository.save(crisis1);
        // Create and save the second Crisis
        const crisis2 = new Crisis_1.Crisis();
        crisis2.fire_truck_number = 4;
        crisis2.police_vehicle_number = 2;
        crisis2.isActive = false;
        yield crisisRepository.save(crisis2);
        // Create and save the third Crisis
        const crisis3 = new Crisis_1.Crisis();
        crisis3.fire_truck_number = 6;
        crisis3.police_vehicle_number = 4;
        crisis3.isActive = true;
        yield crisisRepository.save(crisis3);
        res.send('Three Crisis records added to the database.');
    }
    catch (error) {
        res.status(500).send('Error adding Crisis records.');
    }
}));
exports.default = app;
