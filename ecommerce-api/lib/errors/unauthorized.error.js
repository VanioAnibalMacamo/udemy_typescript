"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
const base_error_1 = require("./base.error");
class UnauthorizedError extends base_error_1.ErrorBase {
    constructor(message = "Não autorizado") {
        super(401, message);
    }
}
exports.UnauthorizedError = UnauthorizedError;
//# sourceMappingURL=unauthorized.error.js.map