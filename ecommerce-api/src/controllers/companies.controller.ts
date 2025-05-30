import { Request, Response } from "express";
import { CompanyService } from "../services/company.service copy.js";
import { Company } from "../models/company.model.js";

export class CompaniesController {
  static async getAll(req: Request, res: Response) {
    res.send(await new CompanyService().getAll());
  }

  static async getById(req: Request, res: Response) {
    let companyId = req.params.id;

    res.send(await new CompanyService().getById(companyId));
  }

  static async save(req: Request, res: Response) {
    try {
      const companyService = new CompanyService();
      const company = req.body;

      const companySalvo = await companyService.save(company);

      res.status(201).send({
        message: `Company created successfully`,
        company: companySalvo,
      });
    } catch (error) {
    
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const companyId = req.params.id;
      const company = req.body as Company;

      const companyService = new CompanyService();
      const companyAtualizado = await companyService.update(companyId, company);

      res.send({
        message: `Company updated successfully`,
        company: companyAtualizado,
      });
    } catch (error) {

    }
  }

}
