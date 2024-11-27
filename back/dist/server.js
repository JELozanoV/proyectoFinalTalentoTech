"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var userRoutes_1 = __importDefault(require("./routes/userRoutes"));
var appointmentRoutes_1 = __importDefault(require("./routes/appointmentRoutes"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use("/users", userRoutes_1.default);
app.use("/appointments", appointmentRoutes_1.default);
exports.default = app;
