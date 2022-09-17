
import {Router} from "express";

import OrdenController from "./orden.controller";

const router = Router();

const controller = new OrdenController();

router.post("/orden", controller.create);

router.get("/orden", controller.list);

router.get("/orden/:ordenId", controller.get);

router.put("/orden/:ordenId", controller.update);

router.delete("/orden/:ordenId", controller.remove);


export default router;