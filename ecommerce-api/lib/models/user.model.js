"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const celebrate_1 = require("celebrate");
exports.userSchema = celebrate_1.Joi.object().keys({
    name: celebrate_1.Joi.string().required(),
    email: celebrate_1.Joi.string().email().required()
});
//# sourceMappingURL=user.model.js.map