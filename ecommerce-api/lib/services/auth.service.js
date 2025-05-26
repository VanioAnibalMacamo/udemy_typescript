"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const email_already_exists_error_1 = require("../errors/email-already-exists.error");
const auth_1 = require("firebase-admin/auth");
class AuthService {
    create(user) {
        return (0, auth_1.getAuth)().createUser({
            email: user.email,
            password: user.password,
            displayName: user.name,
        }).catch((error) => {
            if (error.code === "auth/email-already-exists") {
                throw new email_already_exists_error_1.EmailAlreadyExistsError();
            }
            throw error;
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map