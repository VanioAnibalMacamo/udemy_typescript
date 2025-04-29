import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World com tsc watch!");
});

app.get("/users", (req: Request, res: Response) => {
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

  res.send(users);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
