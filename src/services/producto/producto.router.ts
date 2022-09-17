

import {Router} from "express";

import ProductoController from "./producto.controller";

const router = Router();

const controller = new ProductoController();

router.post("/producto", controller.create);

router.get("/producto", controller.list);

router.get("/producto/:productoId", controller.get);

router.put("/producto/:productoId", controller.update);

router.delete("/producto/:productoId", controller.remove);

export default router;

