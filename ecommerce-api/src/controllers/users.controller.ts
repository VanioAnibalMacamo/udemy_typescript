import { Request, Response } from "express";

let id = 0;

type User = {
  id: number;
  name: string;
  email: string;
};
let usuarios: User[] = [];

export class UsersController {
  static getAll(req: Request, res: Response) {
    res.send(usuarios);
  }

  static getById(req: Request, res: Response) {
    const { id } = req.params;
    const usuario = usuarios.find((user) => user.id === Number(id));
    if (usuario) {
      res.send(usuario);
    } else {
      res.status(404).send("Usuário não encontrado");
    }
  }

  static save(req: Request, res: Response) {
    let usuario = req.body;
    usuario.id = ++id;
    usuarios.push(usuario);

    res.send({
      message: "User created successfully",
    });
  }

  static update (req: Request, res: Response)  {
    let id = Number(req.params.id);
    let { name, email } = req.body;
  
    let indexOf = usuarios.findIndex((_user: User) => _user.id === id);
  
    usuarios[indexOf].name = name;
    usuarios[indexOf].email = email;
    
    res.send({
      message: "Usuario atualizado com sucesso!",
    });
  }

  static delete (req: Request, res: Response)  {
    let id = Number(req.params.id);
    let usuario = usuarios.find((usuario) => usuario.id === id);
  
    if (usuario) {
      usuarios = usuarios.filter((usuario) => usuario.id !== id);
  
      res.send({
        message: "Usuario Removido",
      });
    } else {
      res.send({
        message: "User deleted successfully",
      });
    }
  }
}
