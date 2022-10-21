const Psicologos = require("./Psicologos");
const Pacientes = require("./Pacientes")
const Atendimentos = require("./Atendimentos");

// Relacao Psi com Atendimentos
Psicologos.hasMany(Atendimentos, {
  foreignKey: "id_psicologo",
});

Atendimentos.hasOne(Psicologos, {
  foreignKey: "num_atendimento",
});

// Relacao Pacientes com Atendimentos
Pacientes.hasMany(Atendimentos, {
  foreignKey: "id_paciente",
});

Atendimentos.hasOne(Pacientes, {
  foreignKey: "num_atendimento",
});

module.exports = {
  Psicologos,
  Pacientes,
  Atendimentos,
};
