"use strict";
// Import other necessary dependencies
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const ormconfig_1 = __importDefault(require("./ormconfig")); // Adjust the path if needed
// Create Express app
const app = (0, express_1.default)();
// ... (add middleware and routes as needed)
// Create database connection
(0, typeorm_1.createConnection)(ormconfig_1.default)
    .then(connection => {
    console.log('Database connected successfully');
    // You can also set up additional things dependent on the database here
    // Start the Express app after the database connection is established
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch(error => {
    console.error('TypeORM connection error: ', error);
});
// Export the app
exports.default = app;
