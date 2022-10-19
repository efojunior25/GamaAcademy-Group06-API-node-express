const db = require("../database");
const { DataTypes } = require("sequelize");

const Psicologos = db.define(
    "Psicologos", 
    {
    id_psicologo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },    
    senha: {
        type: DataTypes.STRING,
    },
    apresentacao: {
        type: DataTypes.STRING,
    },
},
{
    tableName: "psicologo",
    timestamps: false,
})

module.exports = Psicologos;