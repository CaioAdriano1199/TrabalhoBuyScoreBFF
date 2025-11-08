import express from "express";
import { produtoIDController, 
    removerProdutoController, 
    listarProdutosController, 
    ativarProdutoController,
    desativarProdutoController,
    atualizarProdutoController
 } from "../controllers/produto.controller.js";

const router = express.Router();

router.get("/:id", produtoIDController);

router.delete("/:id", removerProdutoController);

router.get("/all", listarProdutosController);

router.put("/ativar/:id", ativarProdutoController);

router.put("/desativar/:id", desativarProdutoController);

router.put("/", atualizarProdutoController);

export default router;
