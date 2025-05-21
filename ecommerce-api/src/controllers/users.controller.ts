import { NextFunction, Request, Response } from "express";
import { getFirestore } from "firebase-admin/firestore";

type User = {
  id: number;
  name: string;
  email: string;
};

export class UsersController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {

      const snapshot = await getFirestore().collection("users").get();

      const users = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      res.send(users);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      let userId = req.params.id;

      const doc = await getFirestore().collection("users").doc(userId).get();

      res.send({
        id: doc.id,
        ...doc.data(),
      });
    } catch (error) {
      next(error);
    }
  }

  static async save(req: Request, res: Response, next: NextFunction) {
    try {
      let user = req.body;

      const userSalvo = await getFirestore().collection("users").add(user);

      res.status(201).send({
        message: `User created ${userSalvo.id} successfully`,
      });
    } catch (error) {
      next(error);
    }
  }

  static update(req: Request, res: Response, next: NextFunction) {
    try {
      let userId = req.params.id;
      let user = req.body as User;

      getFirestore().collection("users").doc(userId).set({
        name: user.name,
        email: user.email,
      });

      res.send({
        message: "User updated successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  static delete(req: Request, res: Response, next: NextFunction) {
    try {
      let userId = req.params.id;

      getFirestore().collection("users").doc(userId).delete();

      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
}
