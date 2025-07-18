import { NotFoundError } from "../errors/not-found.error.js";
import { ValidationError } from "../errors/validation.error.js";
import { CompanyRepository } from "../repositories/company.repository.js";
import { UploadFileService } from "./upload.service.js";
export class CompanyService {
    companyRepository;
    uploadFileService;
    constructor() {
        this.companyRepository = new CompanyRepository();
        this.uploadFileService = new UploadFileService("images/comapanies/");
    }
    async getAll() {
        return this.companyRepository.getAll();
    }
    async getById(userId) {
        const company = await this.companyRepository.getById(userId);
        if (!company) {
            throw new NotFoundError("Company not found");
        }
        return company;
    }
    async save(company) {
        const logomarcaUrl = await this.uploadFileService.upload(company.logomarca);
        console.log("URL da imagem:", logomarcaUrl);
        company.logomarca = logomarcaUrl;
        console.log("Salvando no repositório...");
        await this.companyRepository.save(company);
        console.log("Salvo com sucesso!");
    }
    async update(companyId, company) {
        const _company = await this.companyRepository.getById(companyId);
        if (!_company) {
            throw new NotFoundError("Company not found");
        }
        if (!this.isValidUrl(company.logomarca)) {
            _company.logomarca = await this.uploadFileService.upload(company.logomarca);
        }
        _company.cpfCnpj = company.cpfCnpj,
            _company.razaoSocial = company.razaoSocial,
            _company.nomeFantasia = company.nomeFantasia,
            _company.telefone = company.telefone,
            _company.horarioFuncionamento = company.horarioFuncionamento,
            _company.endereco = company.endereco,
            _company.localizacao = company.localizacao,
            _company.taxaEntrega = company.taxaEntrega,
            _company.ativa = company.ativa,
            await this.companyRepository.update(_company);
    }
    isValidUrl(urlStr) {
        try {
            const url = new URL(urlStr);
            if (url.host !== "firebasestorage.googleapis.com") {
                throw new ValidationError("URL de Origem Invalida!");
            }
            return true;
        }
        catch (error) {
            if (error instanceof ValidationError) {
                throw error;
            }
            return false;
        }
    }
}
//# sourceMappingURL=company.service%20copy.js.map