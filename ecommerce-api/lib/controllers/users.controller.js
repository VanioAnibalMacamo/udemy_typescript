"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
let id = 0;
let usuarios = [];
class UsersController {
    static getAll(req, res) {
        res.send(usuarios);
    }
    static getById(req, res) {
        const { id } = req.params;
        const usuario = usuarios.find((user) => user.id === Number(id));
        if (usuario) {
            res.send(usuario);
        }
        else {
            res.status(404).send("Usuário não encontrado");
        }
    }
    static save(req, res) {
        let usuario = req.body;
        usuario.id = ++id;
        usuarios.push(usuario);
        res.send({
            message: "User created successfully",
        });
    }
    static update(req, res) {
        let id = Number(req.params.id);
        let { name, email } = req.body;
        let indexOf = usuarios.findIndex((_user) => _user.id === id);
        usuarios[indexOf].name = name;
        usuarios[indexOf].email = email;
        res.send({
            message: "Usuario atualizado com sucesso!",
        });
    }
    static delete(req, res) {
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
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map