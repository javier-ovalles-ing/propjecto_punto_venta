import {
    Request,
    Response,
    NextFunction
} from "express";
import FacturaEntity from "./factura.entity";
import database from "../../../config/database";
import {
    NotFound
} from "http-errors";


export default class facturaController {


    async list(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
            const repository = await database.getRepository(FacturaEntity);
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
            const repository = database.getRepository(FacturaEntity);
            const Factura = await repository.create(body);
            console.log("factura:",Factura);
            await repository.save(Factura);
            res.status(200).json(Factura);

        } catch (error) {
            next(error);
        }

    }

    async get(req: Request, res: Response, next: NextFunction): Promise < void > {

        const {facturaId} = req.params;
        const repository = database.getRepository(FacturaEntity);
        console.log("idfactura:", facturaId)
        const factura = await repository.findOneBy({
            id: facturaId as any
        });
        console.log("factura:", factura)
        if (!factura) throw new NotFound("Factura does not exist");
        res.status(200).json(factura);

    }

    async update(req: Request, res: Response, next: NextFunction): Promise < void > {

        try {
            const {
                facturaId
            } = req.params;
            const body = req.body;
            const repository = database.getTreeRepository(FacturaEntity);
            const factura = await repository.findOneBy({
                id: facturaId as any
            });
            await repository.update(facturaId, body);

            res.status(200).json(factura);
        } catch (error) {
            next(error);
        }

    }

    async remove(req: Request, res: Response, next: NextFunction): Promise < void > {
        try {
            const repository = database.getTreeRepository(FacturaEntity);
            const {
                facturaId
            } = req.params;
            const factura = await repository.findOneBy({
                id: facturaId as any
            });

            await repository.delete(facturaId);
            res.status(200).json(factura);

        } catch (error) {
            next(error);
        }
    }
}