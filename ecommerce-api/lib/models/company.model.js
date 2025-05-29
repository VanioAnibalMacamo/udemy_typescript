"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companySchema = void 0;
const celebrate_1 = require("celebrate");
exports.companySchema = celebrate_1.Joi.object().keys({
    logomarca: celebrate_1.Joi.string().allow(null),
    cnpcnpj: celebrate_1.Joi.string().required(),
    razaoSocial: celebrate_1.Joi.string().required(),
    nomeFantasia: celebrate_1.Joi.string().required(),
    telefone: celebrate_1.Joi.string().required(),
    horarioFuncionamento: celebrate_1.Joi.string().required(),
    endereco: celebrate_1.Joi.string().required(),
    localizacao: celebrate_1.Joi.string().required(),
    taxaEntrega: celebrate_1.Joi.number().required(),
    ativa: celebrate_1.Joi.boolean().default(true),
});
//# sourceMappingURL=company.model.js.map