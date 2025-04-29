import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World com tsc watch!");
});

let users = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Jane",
    age: 25,
  },
];

app.get("/users", (req: Request, res: Response) => {
  res.send(users);
});

app.post("/users", (req: Request, res: Response) => {
  let user = req.body;

  users.push(user);

  res.send({
    "message": "User created successfully"
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
