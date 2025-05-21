"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = require("firebase-admin/app");
const index_1 = require("./routes/index");
const error_handler_middlewares_1 = require("./middlewares/error-handler.middlewares");
(0, app_1.initializeApp)();
const app = (0, express_1.default)();
(0, index_1.routes)(app);
(0, error_handler_middlewares_1.errorHandler)(app); // Middleware de tratamento de erro
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
//# sourceMappingURL=index.js.map