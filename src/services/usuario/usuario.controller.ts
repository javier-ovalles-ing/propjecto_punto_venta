import {
    Request,
    Response,
    NextFunction
} from "express";
import UsuarioEntity from "./usuario.entity";
import database from "../../../config/database";
import {
    NotFound
} from "http-errors";


export default class UsuarioController {


    async list(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
            const repository = await database.getRepository(UsuarioEntity);
            console.log(repository);
            const Entitys = await repository.find()
            console.log(Entitys)
            res.status(200).json(Entitys);

        } catch (error) {

            next(error);
        }
    }

    async create(req: Request, res: Response, next: NextFunction): Promise < void > {

        try {
            const body = req.body;
            console.log("req.body:", req.body);
            const repository = database.getRepository(UsuarioEntity);
            const Usuario = repository.create(body);
            console.log(Usuario);
            await repository.save(Usuario);
            res.status(200).json(Usuario);

        } catch (error) {
            next(error);
        }

    }

    async get(req: Request, res: Response, next: NextFunction): Promise < void > {

        const {
            usuarioId
        } = req.params;
        const repository = database.getRepository(UsuarioEntity);
        console.log("idusuario:", usuarioId)
        const usuario = await repository.findOneBy({
            id: usuarioId as any
        });
        console.log("usuario:", usuario)
        if (!usuario) throw new NotFound("Usuario does not exist");
        res.status(200).json(usuario);

    }

    async update(req: Request, res: Response, next: NextFunction): Promise < void > {

        try {
            const {usuarioId} = req.params;
            const body = req.body;
            const repository = database.getTreeRepository(UsuarioEntity);
            const usuario = await repository.findOneBy({
                id: usuarioId as any
            });
            await repository.update(usuarioId, body);
            
            res.status(200).json(usuario);
        } catch (error) {
            next(error);
        }

    }

    async remove(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
            const repository = database.getTreeRepository(UsuarioEntity);
            const {
                usuarioId
            } = req.params;
            const usuario = await repository.findOneBy({
                id: usuarioId as any
            });

            await repository.delete(usuarioId);
            res.status(200).json(usuario);

        } catch (error) {
            next(error);
        }
    }
}