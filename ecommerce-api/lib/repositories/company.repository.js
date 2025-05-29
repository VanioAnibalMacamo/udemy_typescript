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
exports.CompanyRepository = void 0;
const firestore_1 = require("firebase-admin/firestore");
class CompanyRepository {
    constructor() {
        this.collection = (0, firestore_1.getFirestore)().collection("companies");
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const snapshot = yield this.collection.get();
            return snapshot.docs.map((doc) => {
                return Object.assign({ id: doc.id }, doc.data());
            });
        });
    }
    getById(companyId) {
        return __awaiter(this, void 0, void 0, function* () {
            const doc = yield this.collection.doc(companyId).get();
            if (doc.exists) {
                return Object.assign({ id: doc.id }, doc.data());
            }
            else {
                return null;
            }
        });
    }
    save(company) {
        return __awaiter(this, void 0, void 0, function* () {
            const docRef = company.id
                ? this.collection.doc(company.id)
                : this.collection.doc();
            company.id = docRef.id;
            yield this.collection.doc(company.id).set(company);
        });
    }
    update(company) {
        return __awaiter(this, void 0, void 0, function* () {
            let docRef = this.collection.doc(company.id);
            delete company.id;
            yield docRef.set(company);
        });
    }
}
exports.CompanyRepository = CompanyRepository;
//# sourceMappingURL=company.repository.js.map