const express = require("express");
const produtoController = require("../controllers/produtoController");
const usuariosController = require("../controllers/usuariosController");
const authController = require("../controllers/authController");
const requestLog = require("../middlewares/requestLog");
const bloqueio = require("../middlewares/bloqueio");
const usuarioCreateValidation = require("../validations/usuarios/create");
const authLoginValidation = require("../validations/auth/login");
const auth = require("../middlewares/auth");
const routes = express.Router();

routes.get("/produtos", requestLog, bloqueio, produtoController.listarProduto);
routes.post("/produtos", auth, produtoController.cadastrarProduto);
routes.delete("/produtos/:id", produtoController.deletarProduto);
routes.put("/produtos/:id", produtoController.atualizarProduto);

routes.post("/usuarios", usuarioCreateValidation, usuariosController.registro);
routes.post("/login", authLoginValidation, authController.login);

module.exports = routes;
