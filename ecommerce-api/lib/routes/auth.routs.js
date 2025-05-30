import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { AuthController } from "../controllers/auth.controller.js";
import { celebrate, Segments } from "celebrate";
import { authLoginSchema, authRecoverySchema } from "../models/user.model.js";
export const authRoutes = Router();
authRoutes.post('/auth/login', celebrate({ [Segments.BODY]: authLoginSchema }), expressAsyncHandler(AuthController.login));
authRoutes.post('/auth/recovery', celebrate({ [Segments.BODY]: authRecoverySchema }), expressAsyncHandler(AuthController.recovery));
//# sourceMappingURL=auth.routs.js.map