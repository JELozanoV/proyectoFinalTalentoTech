"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth = function (req, res, next) {
    var token = req.headers.token;
    if (token === "Autenticado")
        next();
    else
        res.status(400).json({ message: "Error al autenticar." });
};
exports.default = auth;
