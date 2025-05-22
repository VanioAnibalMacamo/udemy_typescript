"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const validation_error_1 = require("../errors/validation.error");
const internal_server_error_1 = require("../errors/internal-server.error");
const not_found_error_1 = require("../errors/not-found.error");
const errorHandler = (app) => {
    app.use((error, req, res, next) => {
        if (error instanceof validation_error_1.ValidationError) {
            error.send(res);
        }
        else if (error instanceof not_found_error_1.NotFoundError) {
            error.send(res);
        }
        else {
            new internal_server_error_1.InternalServerError().send(res);
        }
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error-handler.middleware.js.map