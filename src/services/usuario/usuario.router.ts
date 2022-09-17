

import {Router} from "express";

import UsuarioController from "./usuario.controller";

const router = Router();

const controller = new UsuarioController();

router.post("/usuario", controller.create);

router.get("/usuario", controller.list);

router.get("/usuario/:usuarioId", controller.get);

router.put("/usuario/:usuarioId", controller.update);

router.delete("/usuario/:usuarioId", controller.remove);

export default router;

