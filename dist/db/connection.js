"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var credentials_1 = __importDefault(require("./credentials"));
var db = new sequelize_1.Sequelize(credentials_1.default.database, credentials_1.default.username, credentials_1.default.password, {
    host: credentials_1.default.host,
    dialect: "postgres",
    port: credentials_1.default.port,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
    logging: console.log,
});
exports.default = db;
