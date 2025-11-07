import express from "express";
import cors from "cors";
import clienteRoutes from "./routes/cliente.route.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/clientes", clienteRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`BFF rodando na porta ${PORT}`);
});
