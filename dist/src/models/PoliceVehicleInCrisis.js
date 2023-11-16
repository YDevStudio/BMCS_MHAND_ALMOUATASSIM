"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoliceVehicleInCrisis = void 0;
const typeorm_1 = require("typeorm");
const Crisis_1 = require("./Crisis");
const PoliceVehicle_1 = require("./PoliceVehicle");
const Route_1 = require("./Route");
let PoliceVehicleInCrisis = class PoliceVehicleInCrisis {
};
exports.PoliceVehicleInCrisis = PoliceVehicleInCrisis;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], PoliceVehicleInCrisis.prototype, "crisis_id", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], PoliceVehicleInCrisis.prototype, "police_vehicle_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PoliceVehicleInCrisis.prototype, "route_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PoliceVehicleInCrisis.prototype, "police_vehicle_status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Crisis_1.Crisis),
    (0, typeorm_1.JoinColumn)({ name: "crisis_id" }),
    __metadata("design:type", Crisis_1.Crisis)
], PoliceVehicleInCrisis.prototype, "crisis", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PoliceVehicle_1.PoliceVehicle),
    (0, typeorm_1.JoinColumn)({ name: "police_vehicle_name" }),
    __metadata("design:type", PoliceVehicle_1.PoliceVehicle)
], PoliceVehicleInCrisis.prototype, "policeVehicle", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Route_1.Route),
    (0, typeorm_1.JoinColumn)({ name: "route_name" }),
    __metadata("design:type", Route_1.Route)
], PoliceVehicleInCrisis.prototype, "route", void 0);
exports.PoliceVehicleInCrisis = PoliceVehicleInCrisis = __decorate([
    (0, typeorm_1.Entity)()
], PoliceVehicleInCrisis);
