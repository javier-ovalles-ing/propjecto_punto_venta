import {
    Request,
    Response,
    NextFunction
} from "express";
import CategoryEntity from "./categoria.entity";
import database from "../../../config/database";
import {
    NotFound
} from "http-errors";
import { EntryType } from "perf_hooks";


export default class CategoriaController {


    async list(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {

            const {Nombre} = req.query;
            
            /* Cambios echos para el Query */

            console.log("Que imprima request",req.query);
            console.log("Que imprima query Nombre: ",Nombre);
            console.log("Que imprima query type of Nombre: ",typeof Nombre);

            const repository = await database.getRepository(CategoryEntity);

            
            const Entitys = Nombre ?  await repository.find({
                where:{
                    Nombre :  Nombre as any,
                    
                },
            }) : await repository.find() ;
            
            console.log("Entity:",Entitys)
            
            res.status(200).json(Entitys);
            


        } catch (error) {

            next(error);
        }
    }

    async create(req: Request, res: Response, next: NextFunction): Promise < void > {

        try {
            const body = req.body;
            console.log("req.body:", req.body);
            const repository = database.getRepository(CategoryEntity);
            const category = repository.create(body);
            console.log(category);
            await repository.save(category);
            res.status(200).json(category);

        } catch (error) {
            next(error);
        }

    }

    async get(req: Request, res: Response, next: NextFunction): Promise < void > {

        const {
            categoriaId
        } = req.params;
        const repository = database.getRepository(CategoryEntity);
        console.log("idCategoria:", categoriaId)
        const categoria = await repository.findOneBy({
            id: categoriaId as any
        });
        console.log("categoria:", categoria)
        if (!categoria) throw new NotFound("category does not exist");
        res.status(200).json(categoria);

    }

    async update(req: Request, res: Response, next: NextFunction): Promise < void > {

        try {
            const {categoriaId} = req.params;
            const body = req.body;
            const repository = database.getTreeRepository(CategoryEntity);
            const categoria = await repository.findOneBy({
                id: categoriaId as any
            });
            await repository.update(categoriaId, body);
            
            res.status(200).json(categoria);
        } catch (error) {
            next(error);
        }

    }

    async remove(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
            const repository = database.getTreeRepository(CategoryEntity);
            const {
                categoriaId
            } = req.params;
            const categoria = await repository.findOneBy({
                id: categoriaId as any
            });

            await repository.delete(categoriaId);
            res.status(200).json(categoria);

        } catch (error) {
            next(error);
        }
    }
}