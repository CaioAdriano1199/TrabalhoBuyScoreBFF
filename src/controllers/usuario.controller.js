import { usuarioIDService } from "../services/usuario.service.js";

export const usuarioIDController = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ sucesso: false, mensagem: "ID não fornecido" });
  }

  try {
    const data = await usuarioIDService(id);
    res.json({ sucesso: true, ...data });
  } catch (error) {
    res.status(error.status || 500).json({
      sucesso: false,
      mensagem: error.mensagem || "Erro interno no BFF",
    });
  }
};
