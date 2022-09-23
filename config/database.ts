import {
    DataSource
} from "typeorm";

import CategoryEntity from "../src/services/categoria/categoria.entity";
import FacturaEntity from "../src/services/factura/factura.entity";
import OrdenEntity from "../src/services/orden/orden.entity";
import ProductoEntity from "../src/services/producto/producto.entity";
import ProductosCompradosEntity from "../src/services/productosComprados/ProductosComprados.entity";
import RolEntity from "../src/services/rol/rol.entity";
import UsuarioEntity from "../src/services/usuario/usuario.entity";

export default new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "punto_venta",
    synchronize: false,
    logging: true,
    entities: [CategoryEntity,OrdenEntity,FacturaEntity,ProductoEntity,RolEntity,UsuarioEntity,ProductosCompradosEntity],
    subscribers: [],
    migrations: ["./migrations/*.ts"],
    migrationsTableName: "custom_migration_table",

    
})