import { Router } from "express";
import { UsersController } from "../controllers/users.controller.js";
import expressAsyncHandler from "express-async-handler";
import { celebrate, Segments } from "celebrate";
import { newUserSchema , updateUserSchema } from "../models/user.model.js";

export const userRoutes = Router();

userRoutes.get("/users", expressAsyncHandler(UsersController.getAll));
userRoutes.get("/users/:id", expressAsyncHandler(UsersController.getById));
userRoutes.post("/users", celebrate({[Segments.BODY]: newUserSchema }), expressAsyncHandler(UsersController.save));
userRoutes.put("/users/:id",celebrate({[Segments.BODY]: updateUserSchema,}), expressAsyncHandler(UsersController.update));
userRoutes.delete("/users/:id",expressAsyncHandler( UsersController.delete));
