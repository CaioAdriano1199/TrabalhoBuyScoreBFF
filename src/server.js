import express from "express";
import cors from "cors";
import clienteRoutes from "./routes/cliente.route.js";
import pontoRoutes from "./routes/ponto.route.js";
import loginRoutes from "./routes/login.route.js";
import usuarioRoutes from "./routes/usuario.route.js";
import produtoRoutes from "./routes/produto.route.js";
import enderecoRoutes from "./routes/endereco.route.js";
import compraRoutes from "./routes/compra.route.js";
import comercioRoutes from "./routes/comercio.route.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/compra", compraRoutes);
app.use("/ponto", pontoRoutes);
app.use("/cliente", clienteRoutes);
app.use("/login", loginRoutes);
app.use("/usuario", usuarioRoutes);
app.use("/produto", produtoRoutes);
app.use("/endereco", enderecoRoutes);
app.use("/comercio", comercioRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`BFF rodando na porta ${PORT}`);
});
