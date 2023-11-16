"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoliceVehicleInCrisis = void 0;
const typeorm_1 = require("typeorm");
const Crisis_1 = require("./Crisis");
const PoliceVehicle_1 = require("./PoliceVehicle");
const Route_1 = require("./Route");
let PoliceVehicleInCrisis = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _crisis_id_decorators;
    let _crisis_id_initializers = [];
    let _police_vehicle_name_decorators;
    let _police_vehicle_name_initializers = [];
    let _route_name_decorators;
    let _route_name_initializers = [];
    let _police_vehicle_status_decorators;
    let _police_vehicle_status_initializers = [];
    let _crisis_decorators;
    let _crisis_initializers = [];
    let _policeVehicle_decorators;
    let _policeVehicle_initializers = [];
    let _route_decorators;
    let _route_initializers = [];
    var PoliceVehicleInCrisis = _classThis = class {
        constructor() {
            this.crisis_id = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _crisis_id_initializers, void 0));
            this.police_vehicle_name = __runInitializers(this, _police_vehicle_name_initializers, void 0);
            this.route_name = __runInitializers(this, _route_name_initializers, void 0);
            this.police_vehicle_status = __runInitializers(this, _police_vehicle_status_initializers, void 0);
            this.crisis = __runInitializers(this, _crisis_initializers, void 0);
            this.policeVehicle = __runInitializers(this, _policeVehicle_initializers, void 0);
            this.route = __runInitializers(this, _route_initializers, void 0);
        }
    };
    __setFunctionName(_classThis, "PoliceVehicleInCrisis");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _crisis_id_decorators = [(0, typeorm_1.PrimaryColumn)()];
        _police_vehicle_name_decorators = [(0, typeorm_1.PrimaryColumn)()];
        _route_name_decorators = [(0, typeorm_1.Column)()];
        _police_vehicle_status_decorators = [(0, typeorm_1.Column)()];
        _crisis_decorators = [(0, typeorm_1.ManyToOne)(() => Crisis_1.Crisis), (0, typeorm_1.JoinColumn)({ name: "crisis_id" })];
        _policeVehicle_decorators = [(0, typeorm_1.ManyToOne)(() => PoliceVehicle_1.PoliceVehicle), (0, typeorm_1.JoinColumn)({ name: "police_vehicle_name" })];
        _route_decorators = [(0, typeorm_1.ManyToOne)(() => Route_1.Route), (0, typeorm_1.JoinColumn)({ name: "route_name" })];
        __esDecorate(null, null, _crisis_id_decorators, { kind: "field", name: "crisis_id", static: false, private: false, access: { has: obj => "crisis_id" in obj, get: obj => obj.crisis_id, set: (obj, value) => { obj.crisis_id = value; } }, metadata: _metadata }, _crisis_id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _police_vehicle_name_decorators, { kind: "field", name: "police_vehicle_name", static: false, private: false, access: { has: obj => "police_vehicle_name" in obj, get: obj => obj.police_vehicle_name, set: (obj, value) => { obj.police_vehicle_name = value; } }, metadata: _metadata }, _police_vehicle_name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _route_name_decorators, { kind: "field", name: "route_name", static: false, private: false, access: { has: obj => "route_name" in obj, get: obj => obj.route_name, set: (obj, value) => { obj.route_name = value; } }, metadata: _metadata }, _route_name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _police_vehicle_status_decorators, { kind: "field", name: "police_vehicle_status", static: false, private: false, access: { has: obj => "police_vehicle_status" in obj, get: obj => obj.police_vehicle_status, set: (obj, value) => { obj.police_vehicle_status = value; } }, metadata: _metadata }, _police_vehicle_status_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _crisis_decorators, { kind: "field", name: "crisis", static: false, private: false, access: { has: obj => "crisis" in obj, get: obj => obj.crisis, set: (obj, value) => { obj.crisis = value; } }, metadata: _metadata }, _crisis_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _policeVehicle_decorators, { kind: "field", name: "policeVehicle", static: false, private: false, access: { has: obj => "policeVehicle" in obj, get: obj => obj.policeVehicle, set: (obj, value) => { obj.policeVehicle = value; } }, metadata: _metadata }, _policeVehicle_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _route_decorators, { kind: "field", name: "route", static: false, private: false, access: { has: obj => "route" in obj, get: obj => obj.route, set: (obj, value) => { obj.route = value; } }, metadata: _metadata }, _route_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PoliceVehicleInCrisis = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PoliceVehicleInCrisis = _classThis;
})();
exports.PoliceVehicleInCrisis = PoliceVehicleInCrisis;
