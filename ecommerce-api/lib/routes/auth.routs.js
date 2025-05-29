"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const auth_controller_1 = require("../controllers/auth.controller");
const celebrate_1 = require("celebrate");
const user_model_1 = require("../models/user.model");
exports.authRoutes = (0, express_1.Router)();
exports.authRoutes.post('/auth/login', (0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: user_model_1.authLoginSchema }), (0, express_async_handler_1.default)(auth_controller_1.AuthController.login));
exports.authRoutes.post('/auth/recovery', (0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: user_model_1.authRecoverySchema }), (0, express_async_handler_1.default)(auth_controller_1.AuthController.recovery));
//# sourceMappingURL=auth.routs.js.map