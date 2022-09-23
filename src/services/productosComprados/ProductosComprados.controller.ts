import {
    Request,
    Response,
    NextFunction
} from "express";
import ProductosCompradosEntity from "./ProductosComprados.entity";
import database from "../../../config/database";
import {
    NotFound
} from "http-errors";


export default class ProductosCompradosController {


    async list(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
            const repository = await database.getRepository(ProductosCompradosEntity);
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
            const repository = database.getRepository(ProductosCompradosEntity);
            const productosComprados = repository.create(body);
            console.log(productosComprados);
            await repository.save(productosComprados);
            res.status(200).json(productosComprados);

        } catch (error) {
            next(error);
        }

    }

    async get(req: Request, res: Response, next: NextFunction): Promise < void > {

        const {
            productosCompradosId
        } = req.params;
        const repository = database.getRepository(ProductosCompradosEntity);
        console.log("idproductosComprados:", productosCompradosId)
        const productosComprados = await repository.findOneBy({
            id: productosCompradosId as any
        });
        console.log("productosComprados:",productosComprados)
        if (!productosComprados) throw new NotFound("rol does not exist");
        res.status(200).json(productosComprados);

    }

    async update(req: Request, res: Response, next: NextFunction): Promise < void > {

        try {
            const {productosCompradosId} = req.params;
            const body = req.body;
            const repository = database.getTreeRepository(ProductosCompradosEntity);
            const productosComprados = await repository.findOneBy({
                id: productosCompradosId as any
            });
            await repository.update(productosCompradosId, body);
            
            res.status(200).json(productosComprados);
        } catch (error) {
            next(error);
        }

    }

    async remove(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
            const repository = database.getTreeRepository(ProductosCompradosEntity);
            const {
               productosCompradosId
            } = req.params;
            const productosComprados = await repository.findOneBy({
                id:productosCompradosId as any
            });

            await repository.delete(productosCompradosId);
            res.status(200).json(productosComprados);

        } catch (error) {
            next(error);
        }
    }
}