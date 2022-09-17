import {
    Request,
    Response,
    NextFunction
} from "express";
import RolEntity from "./rol.entity";
import database from "../../../config/database";
import {
    NotFound
} from "http-errors";


export default class RolController {


    async list(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
            const repository = await database.getRepository(RolEntity);
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
            const repository = database.getRepository(RolEntity);
            const rol = repository.create(body);
            console.log(rol);
            await repository.save(rol);
            res.status(200).json(rol);

        } catch (error) {
            next(error);
        }

    }

    async get(req: Request, res: Response, next: NextFunction): Promise < void > {

        const {
            rolId
        } = req.params;
        const repository = database.getRepository(RolEntity);
        console.log("idrol:", rolId)
        const rol = await repository.findOneBy({
            id: rolId as any
        });
        console.log("rol:", rol)
        if (!rol) throw new NotFound("rol does not exist");
        res.status(200).json(rol);

    }

    async update(req: Request, res: Response, next: NextFunction): Promise < void > {

        try {
            const {rolId} = req.params;
            const body = req.body;
            const repository = database.getTreeRepository(RolEntity);
            const rol = await repository.findOneBy({
                id: rolId as any
            });
            await repository.update(rolId, body);
            
            res.status(200).json(rol);
        } catch (error) {
            next(error);
        }

    }

    async remove(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
            const repository = database.getTreeRepository(RolEntity);
            const {
                rolId
            } = req.params;
            const rol = await repository.findOneBy({
                id: rolId as any
            });

            await repository.delete(rolId);
            res.status(200).json(rol);

        } catch (error) {
            next(error);
        }
    }
}