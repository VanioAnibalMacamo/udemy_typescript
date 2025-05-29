"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyRoutes = void 0;
const express_1 = require("express");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const celebrate_1 = require("celebrate");
const companies_controller_1 = require("../controllers/companies.controller");
const company_model_1 = require("../models/company.model");
exports.companyRoutes = (0, express_1.Router)();
exports.companyRoutes.get("/companies", (0, express_async_handler_1.default)(companies_controller_1.CompaniesController.getAll));
exports.companyRoutes.get("/companies/:id", (0, express_async_handler_1.default)(companies_controller_1.CompaniesController.getById));
exports.companyRoutes.post("/companies", (0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: company_model_1.newCompanySchema }), (0, express_async_handler_1.default)(companies_controller_1.CompaniesController.save));
exports.companyRoutes.put("/companies/:id", (0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: company_model_1.updateCompanySchema }), (0, express_async_handler_1.default)(companies_controller_1.CompaniesController.update));
//# sourceMappingURL=companies.route.js.map