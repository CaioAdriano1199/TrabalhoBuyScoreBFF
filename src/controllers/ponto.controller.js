import { criarpontosService } from "../services/ponto.service.js";

export const criarpontosController = async (req, res) => {
  const { pontos } = req.body;
  const token = req.headers.authorization; // ✅ recebe token enviado pelo front

  if (!pontos) {
    return res.status(400).json({ sucesso: false, mensagem: "O valor não pode ser vazio" });
  }

  if (!token) {
    return res.status(401).json({ sucesso: false, mensagem: "Token não enviado" });
  }

  try {
    const data = await criarpontosService(pontos, token);   // ✅ passa token para o service
    res.json({ sucesso: true, ...data });
  } catch (error) {
    res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};
