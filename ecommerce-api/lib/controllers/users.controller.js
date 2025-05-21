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
class UsersController {
    static getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const snapshot = yield (0, firestore_1.getFirestore)().collection("users").get();
                const users = snapshot.docs.map((doc) => {
                    return Object.assign({ id: doc.id }, doc.data());
                });
                res.send(users);
            }
            catch (error) {
                next(error);
            }
        });
    }
    static getById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let userId = req.params.id;
                const doc = yield (0, firestore_1.getFirestore)().collection("users").doc(userId).get();
                res.send(Object.assign({ id: doc.id }, doc.data()));
            }
            catch (error) {
                next(error);
            }
        });
    }
    static save(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user = req.body;
                const userSalvo = yield (0, firestore_1.getFirestore)().collection("users").add(user);
                res.status(201).send({
                    message: `User created ${userSalvo.id} successfully`,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static update(req, res, next) {
        try {
            let userId = req.params.id;
            let user = req.body;
            (0, firestore_1.getFirestore)().collection("users").doc(userId).set({
                name: user.name,
                email: user.email,
            });
            res.send({
                message: "User updated successfully",
            });
        }
        catch (error) {
            next(error);
        }
    }
    static delete(req, res, next) {
        try {
            let userId = req.params.id;
            (0, firestore_1.getFirestore)().collection("users").doc(userId).delete();
            res.status(204).end();
        }
        catch (error) {
            next(error);
        }
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map