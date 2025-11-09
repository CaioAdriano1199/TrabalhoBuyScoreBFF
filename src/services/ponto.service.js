import axios from "axios";

const API_URL = "http://localhost:8081/ponto";

export const criarpontosService = async (pontos, token) => {
    try {
        const response = await axios.post(`${API_URL}/criarponto`, { pontos }, { headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", }, });

        return {
            codigo: response.data
        };
    } catch (error) {
        console.error("Erro ao chamar API:", error.message);
        throw {
            status: error.response?.status,
            mensagem: error.response?.data?.mensagem || "Erro na comunicação com a API",
        };
    }
};

export const resgatarPontosPorCodigoService = async (codigo, token) => {
  try {
    const response = await axios.get(`${API_URL}/codigo/${codigo}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao chamar API:", error.message);
    throw {
      status: error.response?.status,
      mensagem:
        error.response?.data?.mensagem || "Erro na comunicação com a API",
    };
  }
};