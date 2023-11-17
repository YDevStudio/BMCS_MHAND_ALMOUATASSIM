"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Using ormconfig.ts for database configuration");
const config = {
    type: 'sqlite',
    database: 'src/database/bmcs_database.db',
    // Change entities path to compiled JavaScript files
    entities: ['dist/src/models/*.js'],
    synchronize: true,
    logging: false
};
exports.default = config;
