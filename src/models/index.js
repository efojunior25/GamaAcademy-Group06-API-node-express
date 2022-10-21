const Psicologos = require("./Psicologos");
const Pacientes = require("./Pacientes")
const Atendimentos = require("./Atendimentos");

// Relacao Psi com Atendimentos
Psicologos.hasOne(Atendimentos, {
  foreignKey: "id_psicologo",
});

Atendimentos.belongsTo(Psicologos, {
  foreignKey: "num_atendimento",
});

// Relacao Pacientes com Atendimentos
Pacientes.hasOne(Atendimentos, {
  foreignKey: "id_paciente",
});

Atendimentos.belongsTo(Pacientes, {
  foreignKey: "num_atendimento",
});

module.exports = {
  Psicologos,
  Pacientes,
  Atendimentos,
};
