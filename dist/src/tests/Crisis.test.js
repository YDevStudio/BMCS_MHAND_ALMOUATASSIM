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
const typeorm_1 = require("typeorm");
const Route_1 = require("../models/Route"); // Adjust the import path as needed
const ormconfig_1 = __importDefault(require("../../ormconfig"));
describe('Route Entity Tests', () => {
    // Establish a database connection before all tests
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, typeorm_1.createConnection)(ormconfig_1.default);
    }));
    // Close the database connection after all tests
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, typeorm_1.getConnection)().close();
    }));
    it('should create and save a route record', () => __awaiter(void 0, void 0, void 0, function* () {
        const routeRepo = (0, typeorm_1.getRepository)(Route_1.Route);
        const route = new Route_1.Route();
        route.route_name = "Route 1";
        const savedRoute = yield routeRepo.save(route);
        expect(savedRoute).toBeDefined();
        expect(savedRoute.route_name).toBe("Route 1");
    }));
    // Add more tests as needed
});
