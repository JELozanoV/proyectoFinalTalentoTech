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
exports.Appointments = void 0;
var typeorm_1 = require("typeorm");
var Users_1 = require("./Users");
var Appointments = (function () {
    function Appointments() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Appointments.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Appointments.prototype, "date", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Appointments.prototype, "time", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: "active" }),
        __metadata("design:type", String)
    ], Appointments.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Appointments.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Users_1.Users; }, function (user) { return user.appointments; }),
        __metadata("design:type", Users_1.Users)
    ], Appointments.prototype, "user", void 0);
    Appointments = __decorate([
        (0, typeorm_1.Entity)({
            name: "appointments"
        })
    ], Appointments);
    return Appointments;
}());
exports.Appointments = Appointments;
