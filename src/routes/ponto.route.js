import express from "express";
import { criarpontosController,
            resgatarPontosPorCodigoController
 } from "../controllers/ponto.controllers.js";

const router = express.Router();

router.post("/", criarpontosController);

router.get("/codigo/:codigo", resgatarPontosPorCodigoController);

export default router;
