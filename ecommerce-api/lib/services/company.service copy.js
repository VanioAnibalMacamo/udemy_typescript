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
exports.CompanyService = void 0;
const not_found_error_1 = require("../errors/not-found.error");
const company_repository_1 = require("../repositories/company.repository");
const upload_service_1 = require("./upload.service");
class CompanyService {
    constructor() {
        this.companyRepository = new company_repository_1.CompanyRepository();
        this.uploadFileService = new upload_service_1.UploadFileService( /*"images/comapanies/"*/);
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.companyRepository.getAll();
        });
    }
    getById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const company = yield this.companyRepository.getById(userId);
            if (!company) {
                throw new not_found_error_1.NotFoundError("Company not found");
            }
            return company;
        });
    }
    save(company) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.uploadFileService.upload(company.logomarca);
            // await this.companyRepository.save(company);
        });
    }
    update(companyId, company) {
        return __awaiter(this, void 0, void 0, function* () {
            const _company = yield this.companyRepository.getById(companyId);
            if (!_company) {
                throw new not_found_error_1.NotFoundError("Company not found");
            }
            _company.logomarca = company.logomarca,
                _company.cpfCnpj = company.cpfCnpj,
                _company.razaoSocial = company.razaoSocial,
                _company.nomeFantasia = company.nomeFantasia,
                _company.telefone = company.telefone,
                _company.horarioFuncionamento = company.horarioFuncionamento,
                _company.endereco = company.endereco,
                _company.localizacao = company.localizacao,
                _company.taxaEntrega = company.taxaEntrega,
                _company.ativa = company.ativa,
                yield this.companyRepository.update(_company);
        });
    }
}
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service%20copy.js.map