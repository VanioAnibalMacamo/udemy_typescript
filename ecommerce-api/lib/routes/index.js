"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const users_route_1 = require("./users.route");
const auth_routs_1 = require("./auth.routs");
const companies_route_1 = require("./companies.route");
const routes = (app) => {
    app.use(express_1.default.json({ limit: "5mb" }));
    app.use(auth_routs_1.authRoutes);
    app.use(users_route_1.userRoutes);
    app.use(companies_route_1.companyRoutes);
};
exports.routes = routes;
//# sourceMappingURL=index.js.map