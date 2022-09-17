

import {Router} from "express";

import FacturaController from "./factura.controller";

const router = Router();

const controller = new FacturaController();

router.post("/factura", controller.create);

router.get("/factura", controller.list);

router.get("/factura/:facturaId", controller.get);

router.put("/factura/:facturaId", controller.update);

router.delete("/factura/:facturaId", controller.remove);

export default router;

