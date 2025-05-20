import  { Request, Response } from "express";
import { getFirestore } from "firebase-admin/firestore";


type User = {
  id: number;
  name: string;
  email: string;
};


export class UsersController {
  static async getAll(req: Request, res: Response) {
    const snapshot = await getFirestore().collection("users").get();

    const users = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    res.send(users);
  }

  static async getById(req: Request, res: Response) {
    let userId = req.params.id;

    const doc = await getFirestore().collection("users").doc(userId).get();

    res.send({
      id: doc.id,
      ...doc.data(),
    });
  }

  static async save(req: Request, res: Response) {
    let user = req.body;

    const userSalvo = await getFirestore().collection("users").add(user);

    res.send({
      message: `User created ${userSalvo.id} successfully`,
    });
  }

  static update(req: Request, res: Response) {
    let userId = req.params.id;
    let user = req.body as User;

    getFirestore().collection("users").doc(userId).set({
      name: user.name,
      email: user.email
    });

    res.send({
      message: "User updated successfully",
    });
  }

  static delete(req: Request, res: Response) {
    let userId = req.params.id;

    getFirestore().collection("users").doc(userId).delete();

    res.send({
      message: "User deleted successfully",
    });
  }
}
