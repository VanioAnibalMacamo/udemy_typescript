import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { AuthController } from "../controllers/auth.controller";
import { celebrate, Segments } from "celebrate";
import { authLoginSchema, authRecoverySchema } from "../models/user.model";

export const authRoutes = Router();

authRoutes.post('/auth/login',celebrate({ [Segments.BODY]: authLoginSchema}), expressAsyncHandler(AuthController.login));
authRoutes.post('/auth/recovery',celebrate({ [Segments.BODY]: authRecoverySchema}), expressAsyncHandler(AuthController.recovery));