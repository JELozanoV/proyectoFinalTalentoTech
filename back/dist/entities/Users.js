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
exports.Users = void 0;
var typeorm_1 = require("typeorm");
var Credentials_1 = require("./Credentials");
var Appointments_1 = require("./Appointments");
var Users = (function () {
    function Users() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Users.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            length: 100
        }),
        __metadata("design:type", String)
    ], Users.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ unique: true }),
        __metadata("design:type", String)
    ], Users.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Users.prototype, "birthdate", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "nDni", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return Credentials_1.Credentials; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", Credentials_1.Credentials)
    ], Users.prototype, "credential", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Appointments_1.Appointments; }, function (appointment) { return appointment.user; }),
        __metadata("design:type", Array)
    ], Users.prototype, "appointments", void 0);
    Users = __decorate([
        (0, typeorm_1.Entity)({
            name: "users"
        })
    ], Users);
    return Users;
}());
exports.Users = Users;
