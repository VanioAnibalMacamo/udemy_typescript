"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("../controllers/users.controller");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
exports.userRoutes = express_1.default.Router();
exports.userRoutes.get("/users", (0, express_async_handler_1.default)(users_controller_1.UsersController.getAll));
exports.userRoutes.get("/users/:id", (0, express_async_handler_1.default)(users_controller_1.UsersController.getById));
exports.userRoutes.post("/users", (0, express_async_handler_1.default)(users_controller_1.UsersController.save));
exports.userRoutes.put("/users/:id", (0, express_async_handler_1.default)(users_controller_1.UsersController.update));
exports.userRoutes.delete("/users/:id", (0, express_async_handler_1.default)(users_controller_1.UsersController.delete));
//# sourceMappingURL=users.route.js.map