import { CollectionReference, getFirestore } from "firebase-admin/firestore";
import { Company } from "../models/company.model";


export class CompanyRepository  {
  private collection: CollectionReference;

  constructor() {
    this.collection = getFirestore().collection("companies");
  }

  async getAll(): Promise<Company[]> {
    const snapshot = await this.collection.get();

    return snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    }) as Company[];
  }

  async getById(companyId: string): Promise<Company | null> {
    const doc = await this.collection.doc(companyId).get();

    if (doc.exists) {
      return {
        id: doc.id,
        ...doc.data(),
      } as Company;
    } else {
      return null;
    }
  }

  async save(company: Company) {
    await this.collection.doc(company.id!).set(company);
  }

  async update(company: Company) {
    let docRef = this.collection.doc(company.id!);
    delete company.id;
    await docRef.set(company);
  }
}
