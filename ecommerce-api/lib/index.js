import express from "express";
import { initializeApp as initializeAdminApp } from 'firebase-admin/app';
import { initializeApp as initializeFirebaseApp } from "firebase/app";
import { routes } from "./routes/index.js";
import { errorHandler } from "./middlewares/error-handler.middleware.js";
import { pageNotFoundHandler } from "./middlewares/page-not-found.middleware.js";
import { auth } from "./middlewares/auth.middleware.js";
initializeAdminApp();
initializeFirebaseApp({
    apiKey: process.env.FIRE_API_KEY,
});
const app = express();
auth(app);
routes(app);
pageNotFoundHandler(app); // Middleware de tratamento de página não encontrada
errorHandler(app); // Middleware de tratamento de erro
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
//# sourceMappingURL=index.js.map