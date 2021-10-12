"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_1 = require("../controllers/users");
var router = (0, express_1.Router)();
router.post("/create", users_1.createUser);
router.get("/average-age", users_1.getAverageAge);
router.get("/all", users_1.getUsers);
exports.default = router;
