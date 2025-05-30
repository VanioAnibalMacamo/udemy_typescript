import { getFirestore } from "firebase-admin/firestore";
export class UserRepository {
    collection;
    constructor() {
        this.collection = getFirestore().collection("users");
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
    async getById(userId) {
        const doc = await this.collection.doc(userId).get();
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
    async save(user) {
        delete user.password;
        await this.collection.doc(user.id).set(user);
    }
    async update(user) {
        let docRef = this.collection.doc(user.id);
        await docRef.set({
            name: user.name,
            email: user.email,
        });
    }
    async delete(userId) {
        await this.collection.doc(userId).delete();
    }
}
//# sourceMappingURL=user.repository.js.map