"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRecoverySchema = exports.authLoginSchema = exports.updateUserSchema = exports.newUserSchema = void 0;
const celebrate_1 = require("celebrate");
exports.newUserSchema = celebrate_1.Joi.object().keys({
    name: celebrate_1.Joi.string().required(),
    email: celebrate_1.Joi.string().email().required(),
    password: celebrate_1.Joi.string().min(6).required()
});
exports.updateUserSchema = celebrate_1.Joi.object().keys({
    name: celebrate_1.Joi.string().required(),
    email: celebrate_1.Joi.string().email().required(),
    password: celebrate_1.Joi.string().min(6)
});
exports.authLoginSchema = celebrate_1.Joi.object().keys({
    email: celebrate_1.Joi.string().email().required(),
    password: celebrate_1.Joi.string().min(6).required()
});
exports.authRecoverySchema = celebrate_1.Joi.object().keys({
    email: celebrate_1.Joi.string().email().required(),
});
//# sourceMappingURL=user.model.js.map