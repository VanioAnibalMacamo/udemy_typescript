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
app.get("/users", (req, res) => {
    res.send(users);
});
app.post("/users", (req, res) => {
    let user = req.body;
    users.push(user);
    res.send({
        "message": "User created successfully"
    });
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
//# sourceMappingURL=index.js.map