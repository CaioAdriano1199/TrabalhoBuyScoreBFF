import { produtoIDService, 
    removerProdutoService, 
    listarProdutosService, 
    ativarProdutoService,
    desativarProdutoService,
    atualizarProdutoService, 
    criarProdutoService
} from "../services/produto.service.js";

export const produtoIDController = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "ID do produto não fornecido",
    });
  }

  try {
    const produto = await produtoIDService(id);

    return res.status(200).json({
      sucesso: true,
      produto,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};

export const removerProdutoController = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "ID do produto não fornecido",
    });
  }

  try {
    const data = await removerProdutoService(id);

    return res.status(200).json({
      sucesso: true,
      ...data,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};

export const listarProdutosController = async (req, res) => {
  try {
    const produtos = await listarProdutosService();

    return res.status(200).json({
      sucesso: true,
      produtos,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};

export const ativarProdutoController = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "ID do produto não fornecido",
    });
  }

  try {
    const data = await ativarProdutoService(id);

    return res.status(200).json({
      sucesso: true,
      ...data,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};

export const desativarProdutoController = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "ID do produto não fornecido",
    });
  }

  try {
    const data = await desativarProdutoService(id);

    return res.status(200).json({
      sucesso: true,
      ...data,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};

export const atualizarProdutoController = async (req, res) => {
  const body = req.body;

  if (!body || Object.keys(body).length === 0) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "Objeto Produto inválido ou vazio",
    });
  }

  try {
    const produtoAtualizado = await atualizarProdutoService(body);

    return res.status(200).json({
      sucesso: true,
      produto: produtoAtualizado,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};

export const criarProdutoController = async (req, res) => {
  const body = req.body;
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      sucesso: false,
      mensagem: "Token não fornecido",
    });
  }

  try {
    const produto = await criarProdutoService(body, token);

    return res.status(200).json({
      sucesso: true,
      produto,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};