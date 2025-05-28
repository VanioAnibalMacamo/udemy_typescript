"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const unauthorized_error_1 = require("../errors/unauthorized.error");
const auth = (app) => {
    app.use((req, res, next) => {
        var _a;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split("Bearer ")[1];
        if (token) {
            console.log(token);
            return next();
        }
        next(new unauthorized_error_1.UnauthorizedError());
    });
};
exports.auth = auth;
//# sourceMappingURL=auth.middleware.js.map