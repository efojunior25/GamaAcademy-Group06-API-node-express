const { Pacientes } = require("../models");

const pacientesController = {
  listarPacientes: async (req, res) => {
    const listaDePacientes = await Pacientes.findAll({
      
    });

    res.json(listaDePacientes);
  },

  async byIdPaciente(req, res) {
    try {

        const  id  = req.params.id;
                  
        const paciente = await Pacientes.findByPk(id)

        if (!paciente) {
            return res.status(404).json({message: "Id não encontrado"})                                
        };

        res.status(200).json(paciente)
    } catch (error) {
        console.log(error)
    }              
    
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

  async deletarPaciente(req,res,next) {        
    try {
        // const { id } = await req.params;

        const paciente = await Pacientes.destroy({
            where: {
                id_paciente: req.params.id
            }
        });

        if (!paciente) {
            res.status(404).json({message: "Id não encontrado"})                                
        };

        res.status(200).json({message: "Paciente Excluido"})
        
    } catch (error) {
       next(error)          
    }
 },

  async atualizarPaciente(req, res) {
    try {
      const { id } = req.params;
      const fieldsloadUpdate = {};

      Object.assign(fieldsloadUpdate, req.body);

      

      await Pacientes.update(fieldsloadUpdate, {
        where: {
          id_paciente: id,
        },
      }
      );
      //devolvendo a atualização
      const paciente = await Pacientes.findByPk(id);
      return res.status(200).json(paciente);

    } catch (error) {
      return res.status(500).json(ERRORS.PACIENTES.ID)
    }
 },
};

module.exports = pacientesController;
