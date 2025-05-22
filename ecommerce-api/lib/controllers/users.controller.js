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
const firestore_1 = require("firebase-admin/firestore");
const validation_error_1 = require("../errors/validation.error");
const not_found_error_1 = require("../errors/not-found.error");
class UsersController {
    static getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const snapshot = yield (0, firestore_1.getFirestore)().collection("users").get();
            const users = snapshot.docs.map((doc) => {
                return Object.assign({ id: doc.id }, doc.data());
            });
            res.send(users);
        });
    }
    static getById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let userId = req.params.id;
            const doc = yield (0, firestore_1.getFirestore)().collection("users").doc(userId).get();
            if (doc.exists) {
                res.send(Object.assign({ id: doc.id }, doc.data()));
            }
            else {
                throw new not_found_error_1.NotFoundError("Usuario não encontrado!").send(res);
            }
        });
    }
    static save(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            let user = req.body;
            if (!user.email || ((_a = user.email) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                throw new validation_error_1.ValidationError("Email is required");
            }
            const userSalvo = yield (0, firestore_1.getFirestore)().collection("users").add(user);
            res.status(201).send({
                message: `User created ${userSalvo.id} successfully`,
            });
        });
    }
    static update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let userId = req.params.id;
            let user = req.body;
            let docRef = (0, firestore_1.getFirestore)().collection("users").doc(userId);
            if ((yield docRef.get()).exists) {
                yield docRef.set({
                    name: user.name,
                    email: user.email,
                });
                res.send({
                    message: "User updated successfully",
                });
            }
            else {
                throw new not_found_error_1.NotFoundError("Usuario não existe!").send(res);
            }
        });
    }
    static delete(req, res, next) {
        let userId = req.params.id;
        (0, firestore_1.getFirestore)().collection("users").doc(userId).delete();
        res.status(204).end();
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map