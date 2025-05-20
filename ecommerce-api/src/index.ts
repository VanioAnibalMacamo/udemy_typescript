import express from "express";
import { initializeApp } from 'firebase-admin/app';
import { routes } from "./routes/index";

initializeApp();
const app = express();

routes(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
