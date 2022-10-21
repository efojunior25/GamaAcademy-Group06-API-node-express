const { Atendimentos } = require("../models");
const bcrypt = require("bcryptjs");

const AtendimentosController = {
     async listAtendimentos(req, res) {
        try {
            const listarAtendimentos = await Atendimentos.findAll();
    
            res.json(listarAtendimentos);            
        } catch (error) {
            res.status(400).json({error});
            
        }
     },

     async byIdAtendimento(req, res) {
        try {

            const {id} = req.params;
                      
            const atendimento = await Atendimentos.findByPk(id)


            if (!atendimento) {
                return res.status(404).json({message: "Id não encontrado"})                                
            };

            res.status(200).json(atendimento)
        } catch (error) {
            res.status(400).json({error})
        }              
        
     },

     async createAtendimento(req,res) {
        try {
            const { data_atendimento, observacao, paciente_id, psicologo_id } = req.body;

            const newAtendimento = await Atendimentos.create({
                data_atendimento, 
                observacao,
                paciente_id, 
                psicologo_id
            });

           res.status(201).json(newAtendimento)
        } catch (error) { 
            res.status(400).json({message: "Faltou algum campo ser preenchido"})            
        }
     },
        
};

module.exports = AtendimentosController;