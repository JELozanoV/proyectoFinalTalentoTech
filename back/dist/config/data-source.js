"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var Users_1 = require("../entities/Users");
var Appointments_1 = require("../entities/Appointments");
var Credentials_1 = require("../entities/Credentials");
var envs_1 = require("./envs");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.DB_HOST,
    port: Number(envs_1.DB_PORT),
    username: envs_1.DB_USER,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DB_NAME,
    synchronize: true,
    logging: ["error"],
    entities: [Users_1.Users, Appointments_1.Appointments, Credentials_1.Credentials],
    subscribers: [],
    migrations: [],
});
