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
let usuarios = [];
class UsersController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const snapshot = yield (0, firestore_1.getFirestore)().collection("users").get();
            const users = snapshot.docs.map((doc) => {
                return Object.assign({ id: doc.id }, doc.data());
            });
            res.send(users);
        });
    }
    static getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let userId = req.params.id;
            const doc = yield (0, firestore_1.getFirestore)().collection("users").doc(userId).get();
            res.send(Object.assign({ id: doc.id }, doc.data()));
        });
    }
    static save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = req.body;
            const userSalvo = yield (0, firestore_1.getFirestore)().collection("users").add(user);
            res.send({
                message: `User created ${userSalvo.id} successfully`,
            });
        });
    }
    static update(req, res) {
        let id = Number(req.params.id);
        let { name, email } = req.body;
        let indexOf = usuarios.findIndex((_user) => _user.id === id);
        usuarios[indexOf].name = name;
        usuarios[indexOf].email = email;
        res.send({
            message: "Usuario atualizado com sucesso!",
        });
    }
    static delete(req, res) {
        let id = Number(req.params.id);
        let usuario = usuarios.find((usuario) => usuario.id === id);
        if (usuario) {
            usuarios = usuarios.filter((usuario) => usuario.id !== id);
            res.send({
                message: "Usuario Removido",
            });
        }
        else {
            res.send({
                message: "User deleted successfully",
            });
        }
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map