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
exports.Crisis = void 0;
const typeorm_1 = require("typeorm");
let Crisis = class Crisis {
    // Other properties...
    constructor() {
        this.isActive = false; // Initialize isActive to false by default
    }
    // Static method to log entity details
    static show() {
        console.log("Entity Name: Crisis");
        console.log("Columns:");
        console.log("  crisis_id (PrimaryGeneratedColumn)");
        console.log("  fire_truck_number (Column)");
        console.log("  police_vehicle_number (Column)");
        console.log("  isActive (Column)");
        // Add other properties here as needed
    }
};
exports.Crisis = Crisis;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Crisis.prototype, "crisis_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Crisis.prototype, "fire_truck_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Crisis.prototype, "police_vehicle_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Crisis.prototype, "isActive", void 0);
exports.Crisis = Crisis = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [])
], Crisis);
