const { Atendimentos } = require("../models");
const bcrypt = require("bcryptjs");

const AtendimentosController = {
     async listAtendimentos(req, res) {
        try {
            const listarAtendimentos = await Atendimentos.findAll();
    
            res.json(listarAtendimentos);            
        } catch (error) {
            console.log(error);
            
        }
     },

     async byIdAtendimento(req, res) {
        try {

            const {id} = req.params;
                      
            const atendimento = await Atendimentos.findOne({
                where: {
                    id,
                },
                attributes:["num_atendimento", "data_atendimento", "observacao", "paciente_id", "psicologo_id"]
            });


            if (!atendimento) {
                return res.status(404).json({message: "Id não encontrado"})                                
            };

            res.status(200).json(atendimento)
        } catch (error) {
            console.log(error)
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
            console.log(error)            
        }
     },
        
};

module.exports = AtendimentosController;