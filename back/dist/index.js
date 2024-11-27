"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var envs_1 = require("./config/envs");
var server_1 = __importDefault(require("./server"));
require("reflect-metadata");
var data_source_1 = require("./config/data-source");
data_source_1.AppDataSource.initialize()
    .then(function (res) {
    console.log("Database connected");
    server_1.default.listen(envs_1.PORT, function () {
        console.log("Server listening on port ".concat(envs_1.PORT, " "));
    });
})
    .catch(function (error) { return console.log(error); });
