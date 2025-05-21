"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (app) => {
    app.use((error, req, res, next) => {
        res.status(500).send({
            message: "Erro Interno do Servidor",
        });
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error-handler.middlewares.js.map