

import {Router} from "express";

import ProductosCompradosController from "./ProductosComprados.controller";

const router = Router();

const controller = new ProductosCompradosController();

router.post("/ProductosComprados", controller.create);

router.get("/ProductosComprados", controller.list);

router.get("/ProductosComprados/:ProductosCompradosId", controller.get);

router.put("/ProductosComprados/:ProductosCompradosId", controller.update);

router.delete("/ProductosComprados/:ProductosCompradosId", controller.remove);

export default router;

