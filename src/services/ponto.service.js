import axios from "axios";

const API_URL = "http://localhost:8081/ponto";

export const criarpontosService = async (pontos, token) => {
    try {
        const response = await axios.post(`${API_URL}/criarponto`, { pontos }, { headers: { Authorization: token, "Content-Type": "application/json", }, });

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
