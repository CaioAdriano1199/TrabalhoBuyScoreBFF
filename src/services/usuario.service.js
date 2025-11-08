import axios from "axios";

const API_URL = "http://localhost:8081/usuario";

export const usuarioIDService = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);

    return {
      usuario: response.data,
    };
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);
    throw {
      status: error.response?.status,
      mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};
