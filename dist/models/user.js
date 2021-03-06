"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connection_1 = __importDefault(require("../db/connection"));
var User = connection_1.default.define("User", {
    firstName: {
        type: sequelize_1.DataTypes.STRING,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
    },
    birthday: {
        type: sequelize_1.DataTypes.DATE,
    },
});
exports.default = User;
