const db = require("../database");
const { DataTypes } = require("sequelize");

const Atendimentos = db.define(
  "Atendimentos",
  {
    num_atendimento: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data_atendimento: {
      type: DataTypes.DATE,
    },
    observacao: {
      type: DataTypes.STRING,
    },
    paciente_id: {
      type: DataTypes.INTEGER,
    },
    psicologo_id: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "atendimento",
  }
);

module.exports = Atendimentos;
