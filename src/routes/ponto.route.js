import express from "express";
import { criarpontosController } from "../controllers/ponto.controllers.js";

const router = express.Router();

router.post("/", criarpontosController);

export default router;
