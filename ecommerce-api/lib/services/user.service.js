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
exports.UserService = void 0;
const firestore_1 = require("firebase-admin/firestore");
const not_found_error_1 = require("../errors/not-found.error");
class UserService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const snapshot = yield (0, firestore_1.getFirestore)().collection("users").get();
            return snapshot.docs.map((doc) => {
                return Object.assign({ id: doc.id }, doc.data());
            });
        });
    }
    getById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const doc = yield (0, firestore_1.getFirestore)().collection("users").doc(userId).get();
            if (doc.exists) {
                return Object.assign({ id: doc.id }, doc.data());
            }
            else {
                throw new not_found_error_1.NotFoundError("User not found");
            }
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = (0, firestore_1.getFirestore)();
            const docRef = yield db.collection("users").add(user);
            return Object.assign(Object.assign({}, user), { id: docRef.id });
        });
    }
    update(userId, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const docRef = (0, firestore_1.getFirestore)().collection("users").doc(userId);
            const doc = yield docRef.get();
            if (!doc.exists) {
                throw new not_found_error_1.NotFoundError("Usuário não existe!");
            }
            yield docRef.set({
                name: user.name,
                email: user.email,
            });
            return Object.assign(Object.assign({}, user), { id: userId });
        });
    }
    delete(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const docRef = (0, firestore_1.getFirestore)().collection("users").doc(userId);
            const doc = yield docRef.get();
            if (!doc.exists) {
                throw new not_found_error_1.NotFoundError("Usuário não encontrado");
            }
            yield docRef.delete();
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map