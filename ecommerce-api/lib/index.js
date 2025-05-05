"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello World com tsc watch!");
});
let id = 0;
let usuarios = [];
app.get("/users", (req, res) => {
    res.send(usuarios);
});
app.post("/users", (req, res) => {
    let usuario = req.body;
    usuario.id = ++id;
    usuarios.push(usuario);
    res.send({
        message: "User created successfully",
    });
});
app.get("/users/:id", (req, res) => {
    let id = Number(req.params.id);
    let usuario = usuarios.find((usuario) => usuario.id === id);
    if (usuario) {
        res.send(usuario);
    }
    else {
        res.send({
            message: "User not found",
        });
    }
});
app.put("/users/:id", (req, res) => {
    let id = Number(req.params.id);
    let { name, email } = req.body;
    let indexOf = usuarios.findIndex((_user) => _user.id === id);
    usuarios[indexOf].name = name;
    usuarios[indexOf].email = email;
    res.send({
        message: "Usuario atualizado com sucesso!",
    });
});
app.delete("/users/:id", (req, res) => {
    let id = Number(req.params.id);
    let usuario = usuarios.find((usuario) => usuario.id === id);
    if (usuario) {
        usuarios = usuarios.filter((usuario) => usuario.id !== id);
        res.send({
            message: "Usuario Removido",
        });
    }
    else {
        res.send({
            message: "User deleted successfully",
        });
    }
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
//# sourceMappingURL=index.js.map