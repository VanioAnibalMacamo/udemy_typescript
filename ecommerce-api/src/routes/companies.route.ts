import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { celebrate, Segments } from "celebrate";
import { CompaniesController } from "../controllers/companies.controller";
import { companySchema } from "../models/company.model";

export const companyRoutes = Router();

companyRoutes.get("/companies", expressAsyncHandler(CompaniesController.getAll));
companyRoutes.get("/companies/:id", expressAsyncHandler(CompaniesController.getById));
companyRoutes.post("/companies", celebrate({[Segments.BODY]: companySchema }), expressAsyncHandler(CompaniesController.save));
companyRoutes.put("/companies/:id",celebrate({[Segments.BODY]: companySchema}), expressAsyncHandler(CompaniesController.update));

