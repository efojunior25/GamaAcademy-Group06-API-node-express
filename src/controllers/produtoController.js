const { Produtos, Fabricantes, Categorias } = require("../models");

const produtoController = {
  listarProduto: async (req, res) => {
    const listaDeProdutos = await Produtos.findAll({
      include: Categorias,
    });

    res.json(listaDeProdutos);
  },

  async cadastrarProduto(req, res) {
    try {
      console.log(req.auth);

      const { nome, preco, quantidade, fabricante_id, categoria_id } = req.body;

      const novoProduto = await Produtos.create({
        nome,
        preco,
        quantidade,
        fabricante_id,
      });

      const categoria = await Categorias.findByPk(categoria_id);

      await novoProduto.setCategorias(categoria);

      res.status(201).json(novoProduto);
    } catch (err) {
      return res
        .status(500)
        .json("Erro ao tentar processar, contate o suporte");
    }
  },

  async deletarProduto(req, res) {
    try {
      const { id } = req.params;

      await Produtos.destro({
        where: {
          id,
        },
      });

      res.status(204);
    } catch (error) {
      return res.status(500).json("Ocoreu algum problema");
    }
  },

  async atualizarProduto(req, res) {
    const { id } = req.params;
    const { nome, preco, quantidade } = req.body;

    if (!id) return res.status(400).json("id não enviado");

    const produtoAtualizado = await Produtos.update(
      {
        nome,
        preco,
        quantidade,
      },
      {
        where: {
          id,
        },
      }
    );

    res.json("Produto Atualizado");
  },
};

module.exports = produtoController;
