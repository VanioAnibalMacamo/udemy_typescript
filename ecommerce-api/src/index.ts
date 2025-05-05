import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World com tsc watch!");
});

let id = 0;

type User = {
  id: number;
  name: string;
  email: string;
}
let usuarios:  User [] = [];

app.get("/users", (req: Request, res: Response) => {
  res.send(usuarios);
});

app.post("/users", (req: Request, res: Response) => {
  let usuario = req.body;
  usuario.id = ++id;
  usuarios.push(usuario);

  res.send({
    message: "User created successfully",
  });
});

app.get("/users/:id", (req: Request, res: Response) => {
  let id = Number(req.params.id);
  let usuario = usuarios.find((usuario) => usuario.id === id);

  if (usuario) {
    res.send(usuario);
  } else {
    res.send({
      message: "User not found",
    });
  }
});

app.put("/users/:id", (req: Request, res: Response) => {
  let id = Number(req.params.id);
  let { name, email } = req.body;

  let indexOf = usuarios.findIndex((_user: User) => _user.id === id);

  usuarios[indexOf].name = name;
  usuarios[indexOf].email = email;
  
  res.send({
    message: "Usuario atualizado com sucesso!",
  });

});

app.delete("/users/:id", (req: Request, res: Response) => {
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
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
