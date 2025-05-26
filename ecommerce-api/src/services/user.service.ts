import { getFirestore } from "firebase-admin/firestore";
import { User } from "../models/user.model";
import { NotFoundError } from "../errors/not-found.error";

export class UserService {
  async getAll(): Promise<User[]> {
    const snapshot = await getFirestore().collection("users").get();

    return snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    }) as User[];
  }

  async getById(userId: string): Promise<User> {
    const doc = await getFirestore().collection("users").doc(userId).get();

    if (doc.exists) {
      return {
        id: doc.id,
        ...doc.data(),
      } as User;
    } else {
      throw new NotFoundError("User not found");
    }
  }

  async create(user: User): Promise<User> {
    const db = getFirestore();
    const docRef = await db.collection("users").add(user);

    return {
      ...user,
      id: docRef.id,
    };
  }

  async update(userId: string, user: User): Promise<User> {
    const docRef = getFirestore().collection("users").doc(userId);
    const doc = await docRef.get();

    if (!doc.exists) {
      throw new NotFoundError("Usuário não existe!");
    }

    await docRef.set({
      name: user.name,
      email: user.email,
    });

    return {
      ...user,
      id: userId,
    };
  }

  async delete(userId: string): Promise<void> {
    const docRef = getFirestore().collection("users").doc(userId);
    const doc = await docRef.get();

    if (!doc.exists) {
      throw new NotFoundError("Usuário não encontrado");
    }

    await docRef.delete();
  }
}
