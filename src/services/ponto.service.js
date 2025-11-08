import axios from "axios";

const API_URL = "http://localhost:8081/ponto/criarponto"; // coloque a URL real da sua API

export const criarpontosService = async (pontos, token) => {
  try {
    const response = await axios.post(
      API_URL,
      { pontos },
      {
        headers: {
          Authorization: token,             // ✅ repassando token
          "Content-Type": "application/json",
        },
      }
    );

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
