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
exports.auth = void 0;
const unauthorized_error_1 = require("../errors/unauthorized.error");
const auth_1 = require("firebase-admin/auth");
const auth = (app) => {
    app.use((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split("Bearer ")[1];
        if (token) {
            try {
                const decodedIdToken = yield (0, auth_1.getAuth)().verifyIdToken(token, true);
                console.log(decodedIdToken);
                return next();
            }
            catch (error) {
                next(new unauthorized_error_1.UnauthorizedError());
            }
        }
        next(new unauthorized_error_1.UnauthorizedError());
    }));
};
exports.auth = auth;
//# sourceMappingURL=auth.middleware.js.map