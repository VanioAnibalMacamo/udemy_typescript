import { getFirestore } from "firebase-admin/firestore";
export class CompanyRepository {
    collection;
    constructor() {
        this.collection = getFirestore().collection("companies");
    }
    async getAll() {
        const snapshot = await this.collection.get();
        return snapshot.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data(),
            };
        });
    }
    async getById(companyId) {
        const doc = await this.collection.doc(companyId).get();
        if (doc.exists) {
            return {
                id: doc.id,
                ...doc.data(),
            };
        }
        else {
            return null;
        }
    }
    async save(company) {
        const docRef = company.id
            ? this.collection.doc(company.id)
            : this.collection.doc();
        company.id = docRef.id;
        await this.collection.doc(company.id).set(company);
    }
    async update(company) {
        let docRef = this.collection.doc(company.id);
        delete company.id;
        await docRef.set(company);
    }
}
//# sourceMappingURL=company.repository.js.map