"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const user_service_1 = require("../services/user.service");
class UsersController {
    static getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield new user_service_1.UserService().getAll());
        });
    }
    static getById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let userId = req.params.id;
            res.send(yield new user_service_1.UserService().getById(userId));
        });
    }
    static save(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userService = new user_service_1.UserService();
                const user = req.body;
                const userSalvo = yield userService.save(user);
                res.status(201).send({
                    message: `User created successfully`,
                    user: userSalvo,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.params.id;
                const user = req.body;
                const userService = new user_service_1.UserService();
                const userAtualizado = yield userService.update(userId, user);
                res.send({
                    message: `User updated successfully`,
                    user: userAtualizado,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.params.id;
                const userService = new user_service_1.UserService();
                yield userService.delete(userId);
                res.status(204).end();
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map