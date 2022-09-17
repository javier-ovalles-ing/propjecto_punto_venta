import {
    Request,
    Response,
    NextFunction
} from "express";
import ProductoEntity from "./producto.entity";
import database from "../../../config/database";
import {
    NotFound
} from "http-errors";


export default class ProductoController {


    async list(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
            const repository = await database.getRepository(ProductoEntity);
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
            const repository = database.getRepository(ProductoEntity);
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
            productoId
        } = req.params;
        const repository = database.getRepository(ProductoEntity);
        console.log("idproducto:", productoId)
        const producto = await repository.findOneBy({
            id: productoId as any
        });
        console.log("producto:", producto)
        if (!producto) throw new NotFound("category does not exist");
        res.status(200).json(producto);

    }

    async update(req: Request, res: Response, next: NextFunction): Promise < void > {

        try {
            const {productoId} = req.params;
            const body = req.body;
            const repository = database.getTreeRepository(ProductoEntity);
            const producto = await repository.findOneBy({
                id: productoId as any
            });
            await repository.update(productoId, body);
            
            res.status(200).json(producto);
        } catch (error) {
            next(error);
        }

    }

    async remove(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
            const repository = database.getTreeRepository(ProductoEntity);
            const {
                productoId
            } = req.params;
            const producto = await repository.findOneBy({
                id: productoId as any
            });

            await repository.delete(productoId);
            res.status(200).json(producto);

        } catch (error) {
            next(error);
        }
    }
}