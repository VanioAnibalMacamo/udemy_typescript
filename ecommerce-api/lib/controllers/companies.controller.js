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
exports.CompaniesController = void 0;
const company_service_copy_1 = require("../services/company.service copy");
class CompaniesController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(yield new company_service_copy_1.CompanyService().getAll());
        });
    }
    static getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let companyId = req.params.id;
            res.send(yield new company_service_copy_1.CompanyService().getById(companyId));
        });
    }
    static save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const companyService = new company_service_copy_1.CompanyService();
                const company = req.body;
                const companySalvo = yield companyService.save(company);
                res.status(201).send({
                    message: `Company created successfully`,
                    company: companySalvo,
                });
            }
            catch (error) {
            }
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const companyId = req.params.id;
                const company = req.body;
                const companyService = new company_service_copy_1.CompanyService();
                const companyAtualizado = yield companyService.update(companyId, company);
                res.send({
                    message: `Company updated successfully`,
                    company: companyAtualizado,
                });
            }
            catch (error) {
            }
        });
    }
}
exports.CompaniesController = CompaniesController;
//# sourceMappingURL=companies.controller.js.map