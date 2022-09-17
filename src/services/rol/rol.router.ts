

import {Router} from "express";

import rolController from "./rol.controller";

const router = Router();

const controller = new rolController();

router.post("/rol", controller.create);

router.get("/rol", controller.list);

router.get("/rol/:rolId", controller.get);

router.put("/rol/:rolId", controller.update);

router.delete("/rol/:rolId", controller.remove);

export default router;

