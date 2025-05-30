import { Joi } from "celebrate";
export const newCompanySchema = Joi.object().keys({
    logomarca: Joi.string().base64().required(),
    cpfCnpj: Joi.alternatives().try(Joi.string().length(11).required(), Joi.string().length(14).required()),
    razaoSocial: Joi.string().required(),
    nomeFantasia: Joi.string().required(),
    telefone: Joi.string()
        .regex(/^(?:\+258|00258)?(82|83|84|85|86|87|88)\d{7}$/)
        .required(),
    horarioFuncionamento: Joi.string().required(),
    endereco: Joi.string().required(),
    localizacao: Joi.string().required(),
    taxaEntrega: Joi.number().required(),
    ativa: Joi.boolean().only().allow(true).default(true),
});
export const updateCompanySchema = Joi.object().keys({
    logomarca: Joi.string().allow(null),
    cpfCnpj: Joi.alternatives().try(Joi.string().length(11).required(), Joi.string().length(14).required()),
    razaoSocial: Joi.string().required(),
    nomeFantasia: Joi.string().required(),
    telefone: Joi.string()
        .regex(/^(?:\+258|00258)?(82|83|84|85|86|87|88)\d{7}$/)
        .required(),
    horarioFuncionamento: Joi.string().required(),
    endereco: Joi.string().required(),
    localizacao: Joi.string().required(),
    taxaEntrega: Joi.number().required(),
    ativa: Joi.boolean().required()
});
//# sourceMappingURL=company.model.js.map