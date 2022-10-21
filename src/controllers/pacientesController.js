const { Pacientes } = require("../models");

const pacientesController = {
  listarPacientes: async (req, res) => {
    const listaDePacientes = await Pacientes.findAll({
      
    });

    res.json(listaDePacientes);
  },

  async cadastrarPaciente(req,res) {
    try {
        const { nome, email, idade} = req.body;

        const newPaciente = await Pacientes.create({
            nome,
            email,
            idade

        });

       res.status(201).json(newPaciente)
    } catch (error) { 
        console.log(error)            
    }
 },

  async deletarPaciente(req, res) {
    try {
      const { id } = req.params;

      await Pacientes.destro({
        where: {
          id,
        },
      });

      res.status(204);
    } catch (error) {
      return res.status(500).json("Ocoreu algum problema ao deletar");
    }
  },

  async atualizarPaciente(req, res) {
    const { id } = req.params;
    const { nome, email, idade } = req.body;

    if (!id) return res.status(400).json("id não enviado");

    const pacienteAtualizado = await Pacientes.update(
      {
        nome,
        email,
        idade,
      },
      {
        where: {
          id,
        },
      }
    );

    res.json("Paciente Atualizado com sucesso");
  },
};

module.exports = pacientesController;
