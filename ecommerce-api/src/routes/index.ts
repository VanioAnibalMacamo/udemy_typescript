import express from "express";
import { userRoutes } from "./users.route";
import { authRoutes } from "./auth.routs";


export const routes = (app: express.Express) =>{
    app.use(express.json());
    app.use(authRoutes);
    app.use(userRoutes);
   
}