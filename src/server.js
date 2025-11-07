import express from "express";
import cors from "cors";
import loginRoutes from "./routes/login.routes.js";
import cadastroRoutes from "./routes/cadastro.routes.js";
import produtoRoutes from "./routes/produto.route.js";
import pontosRoutes from "./routes/pontos.routes.js";
import allclienteRoutes from "./routes/allcliente.route.js";
import clienteIDRoutes from "./routes/clienteid.route.js";

const app = express();
app.use(express.json());
app.use(cors());

// Rotas
app.use("/allcliente", allclienteRoutes);
app.use("/login", loginRoutes);
app.use("/cadastro", cadastroRoutes);
app.use("/CadProduto", produtoRoutes);
app.use("/GerarPontos", pontosRoutes);
app.use("/clienteid", clienteIDRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`BFF rodando na porta ${PORT}`);
});
