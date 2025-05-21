import express from "express";
import { initializeApp } from 'firebase-admin/app';
import { routes } from "./routes/index";
import { errorHandler } from "./middlewares/error-handler.middlewares";

initializeApp();
const app = express();

routes(app);

errorHandler(app); // Middleware de tratamento de erro

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
