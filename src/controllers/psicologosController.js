const { Psicologos } = require("../models");
const bcrypt = require("bcryptjs");

const psicologosController = {
     async listPsicologos(req, res) {
        try {
            const listarPsicologos = await Psicologos.findAll();
    
            res.json(listarPsicologos);            
        } catch (error) {
            console.log(error);
            
        }
     },

     async byIdPsicologo(req, res) {
        try {

            const {id} = req.params;
                      
            const psicologo = await Psicologos.findByPk(id)

            if (!psicologo) {
                return res.status(404).json(ERRORS.PSICOLOGOS.ID)                                
            };

            res.status(200).json(psicologo)
        } catch (error) {
            console.log(error)
        }              
        
     },

     async createPsicologo(req,res) {
        try {
            const { nome, email, senha, apresentacao } = req.body;

            const newSenha = bcrypt.hashSync(senha, 6);

            const newPsicologo = await Psicologos.create({
                nome,
                email,
                senha: newSenha,
                apresentacao,

            });

           res.status(201).json(newPsicologo)
        } catch (error) { 
            console.log(error)            
        }
     },

     async updatePsicologo(req, res) {
        try {
          const { id } = req.params;
          const { senha } = req.body;
          const fieldsloadUpdate = {};
    
          Object.assign(fieldsloadUpdate, req.body);
    
          //verifica a senha foi informada no body, alterada ou não. se alterar refaz a criptografia
          if (senha) {
            const newSenha = bcrypt.hashSync(senha, 10);
            Object.assign(fieldsloadUpdate, { senha: newSenha });
          }
    
          await Psicologos.update(fieldsloadUpdate, {
            where: {
              id_psicologo: id,
            },
          }
          );
          //devolvendo a atualização
          const psicologo = await Psicologos.findByPk(id);
          return res.status(200).json(psicologo);
    
        } catch (error) {
          return res.status(500).json(ERRORS.PSICOLOGOS.ID)
        }
     },

     async deletePsicologo(req,res,next) {        
        try {
            // const { id } = await req.params;

            const psicologo = await Psicologos.destroy({
                where: {
                    id_psicologo: req.params.id
                }
            });

            if (!psicologo) {
                res.status(404).json({message: "Id não encontrado"})                                
            };

            res.status(204).json({message: "Psicólogo Excluido"})
            
        } catch (error) {
           next(error)          
        }
     },
        
};

module.exports = psicologosController;