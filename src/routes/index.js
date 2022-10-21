const express = require("express");
const pacientesController = require("../controllers/pacientesController");
const authController = require("../controllers/authController");
const psicologosController = require("../controllers/psicologosController");
const atendimentosController = require("../controllers/atendimentosController");
const requestLog = require("../middlewares/requestLog");
const bloqueio = require("../middlewares/bloqueio");
const authLoginValidation = require("../validations/auth/login");
const psicologoCreateValidation = require("../validations/psicologos/create");
const byIdValidation = require("../validations/psicologos/getOne");
const psicologoUpdateValidation = require("../validations/psicologos/update");
//const auth = require("../middlewares/auth");
const routes = express.Router();

//rotas para pacientes
routes.get("/pacientes", pacientesController.listarPacientes);
routes.get("/paciente/:id", pacientesController.byIdPaciente);
routes.post("/paciente", pacientesController.cadastrarPaciente);
routes.delete("/paciente/:id", pacientesController.deletarPaciente);
routes.put("/paciente/:id", pacientesController.atualizarPaciente);

//rotas para psicologo
routes.get("/psicologos", psicologosController.listPsicologos);
routes.get("/psicologo/:id",  psicologosController.byIdPsicologo);
routes.post("/psicologo", psicologoCreateValidation, psicologosController.createPsicologo);
routes.put("/psicologo/:id", psicologosController.updatePsicologo);
routes.delete("/psicologo/:id", psicologosController.deletePsicologo);

// rotas atendimento
routes.get("/atendimentos", atendimentosController.listAtendimentos);
routes.get("/atendimento/:id", byIdValidation, atendimentosController.byIdAtendimento);
routes.post("/atendimento", atendimentosController.createAtendimento);

//rotas de login
routes.post("/login", authLoginValidation, authController.login);

module.exports = routes;
