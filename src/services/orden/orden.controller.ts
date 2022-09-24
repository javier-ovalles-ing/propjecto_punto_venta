

import {
    Request,
    Response,
    NextFunction
} from "express";
import OrdenEntity from "./orden.entity";
import database from "../../../config/database";
import {
    NotFound
} from "http-errors";
import FacturaEntity from "../factura/factura.entity";
import { orden1663179815317 } from "../../../migaciones guardadas/1663179815317-orden";


export default class OrdenController {


    async list(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
            const repository = await database.getRepository(OrdenEntity);
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
            console.log("req.body:",body);
            const repository = database.getRepository(OrdenEntity);
            const Orden = repository.create(body as Object);
            const factura = new FacturaEntity()
            factura.monto = 45;
            factura.fecha = new Date(); 
             Orden.idFactura = factura as FacturaEntity; 

            console.log("objeto factura: ", factura)
            
            await repository.save(Orden);
            res.status(200).json(Orden);

        } catch (error) {
            next(error);
        }

    }

    async get(req: Request, res: Response, next: NextFunction): Promise < void > {

        const {
            ordenId
        } = req.params;
        const repository = database.getRepository(OrdenEntity);
        console.log("idorden:", ordenId)
        const orden = await repository.findOneBy({
            id: ordenId as any
        });
        console.log("orden:", orden)
        if (!orden) throw new NotFound("Orden does not exist");
        res.status(200).json(orden);

    }

    async update(req: Request, res: Response, next: NextFunction): Promise < void > {

        try {
            const {ordenId} = req.params;
            const body = req.body;
            const repository = database.getTreeRepository(OrdenEntity);
            const orden = await repository.findOneBy({
                id: ordenId as any
            });
            await repository.update(ordenId, body);
            
            res.status(200).json(orden);
        } catch (error) {
            next(error);
        }

    }

    async remove(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
            const repository = database.getTreeRepository(OrdenEntity);
            const {
                ordenId
            } = req.params;
            const orden = await repository.findOneBy({
                id: ordenId as any
            });

            await repository.delete(ordenId);
            res.status(200).json(orden);

        } catch (error) {
            next(error);
        }
    }
}