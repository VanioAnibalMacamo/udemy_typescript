import { CompanyService } from "../services/company.service copy.js";
export class CompaniesController {
    static async getAll(req, res) {
        res.send(await new CompanyService().getAll());
    }
    static async getById(req, res) {
        let companyId = req.params.id;
        res.send(await new CompanyService().getById(companyId));
    }
    static async save(req, res) {
        try {
            const companyService = new CompanyService();
            const company = req.body;
            const companySalvo = await companyService.save(company);
            res.status(201).send({
                message: `Company created successfully`,
                company: companySalvo,
            });
        }
        catch (error) {
        }
    }
    static async update(req, res) {
        try {
            const companyId = req.params.id;
            const company = req.body;
            const companyService = new CompanyService();
            const companyAtualizado = await companyService.update(companyId, company);
            res.send({
                message: `Company updated successfully`,
                company: companyAtualizado,
            });
        }
        catch (error) {
        }
    }
}
//# sourceMappingURL=companies.controller.js.map