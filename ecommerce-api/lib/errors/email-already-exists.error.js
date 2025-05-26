"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailAlreadyExistsError = void 0;
const base_error_1 = require("./base.error");
class EmailAlreadyExistsError extends base_error_1.ErrorBase {
    constructor(message = "O e-mail ja esta em uso por outra conta!") {
        super(409, message);
    }
}
exports.EmailAlreadyExistsError = EmailAlreadyExistsError;
//# sourceMappingURL=email-already-exists.error.js.map