

import {Router} from "express";

import CategoriaController from "./categoria.controller";

const router = Router();

const controller = new CategoriaController();

router.post("/categoria", controller.create);

router.get("/categoria", controller.list);

router.get("/categoria/:categoriaId", controller.get);

router.put("/categoria/:categoriaId", controller.update);

router.delete("/categoria/:categoriaId", controller.remove);

export default router;

