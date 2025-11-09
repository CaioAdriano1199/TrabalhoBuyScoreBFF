import axios from "axios";

const API_URL = process.env.API_PRODUTO_URL || "http://localhost:8081/produto";

export const produtoIDService = async (id) => {
  if (!id) {
    throw {
      status: 400,
      mensagem: "ID do produto não fornecido",
    };
  }

  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const removerProdutoService = async (id) => {
  if (!id) {
    throw {
      status: 400,
      mensagem: "ID do produto não fornecido",
    };
  }

  try {
    await axios.delete(`${API_URL}/${id}`);
    return { mensagem: "Produto removido com sucesso" };
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const listarProdutosService = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const ativarProdutoService = async (id) => {
  if (!id) {
    throw {
      status: 400,
      mensagem: "ID do produto não fornecido",
    };
  }

  try {
    await axios.put(`${API_URL}/ativar/${id}`);
    return { mensagem: "Produto ativado com sucesso" };
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const desativarProdutoService = async (id) => {
  if (!id) {
    throw {
      status: 400,
      mensagem: "ID do produto não fornecido",
    };
  }

  try {
    await axios.put(`${API_URL}/desativar/${id}`);
    return { mensagem: "Produto desativado com sucesso" };
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const atualizarProdutoService = async (produto) => {
  if (!produto || Object.keys(produto).length === 0) {
    throw {
      status: 400,
      mensagem: "Objeto Produto inválido ou vazio",
    };
  }

  try {
    const response = await axios.put(`${API_URL}`, produto);
    return response.data;
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};

export const criarProdutoService = async (body, token) => {
  try {
    const response = await axios.post(`${API_URL}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao chamar API de produto:", error.message);
    throw {
      status: error.response?.status,
      mensagem:
        error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};