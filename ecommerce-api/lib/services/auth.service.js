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
exports.AuthService = void 0;
const unauthorized_error_1 = require("../errors/unauthorized.error");
const email_already_exists_error_1 = require("../errors/email-already-exists.error");
const auth_1 = require("firebase-admin/auth");
const auth_2 = require("firebase/auth");
const app_1 = require("firebase/app");
class AuthService {
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, auth_1.getAuth)().createUser({
                email: user.email,
                password: user.password,
                displayName: user.name,
            }).catch((error) => {
                if (error instanceof auth_1.FirebaseAuthError && error.code === "auth/email-already-exists") {
                    throw new email_already_exists_error_1.EmailAlreadyExistsError();
                }
                throw error;
            });
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, auth_2.signInWithEmailAndPassword)((0, auth_2.getAuth)(), email, password)
                .catch((error) => {
                if (error instanceof app_1.FirebaseError) {
                    if (error.code === "auth/invalid-credential") {
                        throw new unauthorized_error_1.UnauthorizedError();
                    }
                }
                throw error;
            });
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map