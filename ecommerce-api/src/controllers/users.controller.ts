import { Request, Response } from "express";
import { User } from "../models/user.model";
import { UserService } from "../services/user.service";

export class UsersController {
  static async getAll(req: Request, res: Response) {
    console.log(`getAll - userId = ${req.user.id}`);
    res.send(await new UserService().getAll());
  }

  static async getById(req: Request, res: Response) {
    let userId = req.params.id;

    res.send(await new UserService().getById(userId));
  }

  static async save(req: Request, res: Response) {
    try {
      const userService = new UserService();
      const user = req.body;

      const userSalvo = await userService.save(user);

      res.status(201).send({
        message: `User created successfully`,
        user: userSalvo,
      });
    } catch (error) {
    
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const userId = req.params.id;
      const user = req.body as User;

      const userService = new UserService();
      const userAtualizado = await userService.update(userId, user);

      res.send({
        message: `User updated successfully`,
        user: userAtualizado,
      });
    } catch (error) {
     
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const userId = req.params.id;

      const userService = new UserService();
      await userService.delete(userId);

      res.status(204).end();
    } catch (error) {
     
    }
  }
}
