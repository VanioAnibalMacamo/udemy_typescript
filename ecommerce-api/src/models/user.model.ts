import { Joi } from "celebrate";

export type User = {
    id: string;
    name: string;
    email: string;
    password?: string;
  };
  
export const newUserSchema = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})

export const updateUserSchema = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6)
})

export const authLoginSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})

export const authRecoverySchema = Joi.object().keys({
    email: Joi.string().email().required(),
})