"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companySchema = void 0;
const celebrate_1 = require("celebrate");
exports.companySchema = celebrate_1.Joi.object().keys({
    logomarca: celebrate_1.Joi.string().allow(null),
    cpfCnpj: celebrate_1.Joi.alternatives().try(celebrate_1.Joi.string().length(11).required(), celebrate_1.Joi.string().length(14).required()),
    razaoSocial: celebrate_1.Joi.string().required(),
    nomeFantasia: celebrate_1.Joi.string().required(),
    telefone: celebrate_1.Joi.string().required(),
    horarioFuncionamento: celebrate_1.Joi.string().required(),
    endereco: celebrate_1.Joi.string().required(),
    localizacao: celebrate_1.Joi.string().required(),
    taxaEntrega: celebrate_1.Joi.number().required(),
    ativa: celebrate_1.Joi.boolean().only().allow(true).default(true),
});
//# sourceMappingURL=company.model.js.map