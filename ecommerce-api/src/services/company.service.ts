import { NotFoundError } from "../errors/not-found.error.js";
//import { ValidationError } from "../errors/validation.error.js";
import { Company } from "../models/company.model.js";
import { CompanyRepository } from "../repositories/company.repository.js";
import { UploadFileService } from "./upload.service.js";

export class CompanyService {
  private companyRepository: CompanyRepository;
  private uploadFileService: UploadFileService;


  constructor() {
    this.companyRepository = new CompanyRepository();
    this.uploadFileService = new UploadFileService("images/comapanies/");
  }

  async getAll(): Promise<Company[]> {
    return this.companyRepository.getAll();
  }

  async getById(userId: string): Promise<Company> {
    const company = await this.companyRepository.getById(userId);

    if (!company) {
      throw new NotFoundError("Company not found");
    }
    return company;
  }

  async save(company: Company) {
    const logomarcaUrl = await this.uploadFileService.upload(company.logomarca);
    console.log("URL da imagem:", logomarcaUrl);
  
    company.logomarca = logomarcaUrl;
  
    console.log("Salvando no repositório...");
    await this.companyRepository.save(company);
    console.log("Salvo com sucesso!");
  }
  
  async update(companyId: string, company: Company) {
    const _company = await this.companyRepository.getById(companyId);
    
    if (!_company) {
      throw new NotFoundError("Company not found");
    }

    /*
    if(!this.isValidUrl(company.logomarca)){
      _company.logomarca = await this.uploadFileService.upload(company.logomarca);
    }
*/
    _company.cpfCnpj =  company.cpfCnpj,
    _company.razaoSocial = company.razaoSocial,
    _company.nomeFantasia = company.nomeFantasia,
    _company.telefone = company.telefone,
    _company.horarioFuncionamento = company.horarioFuncionamento,
    _company.endereco = company.endereco,
    _company.localizacao = company.localizacao,
    _company.taxaEntrega = company.taxaEntrega,
    _company.ativa= company.ativa,

    await this.companyRepository.update(_company);
  }


  /*
  private isValidUrl(urlStr: string): boolean {
    try {
      const url =  new URL(urlStr);
      if(url.host !== "firebasestorage.googleapis.com"){
        throw new ValidationError("URL de Origem Invalida!");
      }
      return true;
    } catch (error) {
      if(error instanceof ValidationError){
        throw error;
      }
      return false;
    }
  }
    */
}
