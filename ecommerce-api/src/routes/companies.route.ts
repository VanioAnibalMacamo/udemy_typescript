import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { celebrate, Segments } from "celebrate";
import { CompaniesController } from "../controllers/companies.controller.js";
import { newCompanySchema, updateCompanySchema } from "../models/company.model.js";

export const companyRoutes = Router();

companyRoutes.get("/companies", expressAsyncHandler(CompaniesController.getAll));
companyRoutes.get("/companies/:id", expressAsyncHandler(CompaniesController.getById));
companyRoutes.post("/companies", celebrate({[Segments.BODY]: newCompanySchema }), expressAsyncHandler(CompaniesController.save));
companyRoutes.put("/companies/:id",celebrate({[Segments.BODY]: updateCompanySchema}), expressAsyncHandler(CompaniesController.update));

