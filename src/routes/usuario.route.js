import express from "express";
import { usuarioIDController } from "../controllers/usuario.controller.js";

const router = express.Router();

router.get("/:id", usuarioIDController);

export default router;
