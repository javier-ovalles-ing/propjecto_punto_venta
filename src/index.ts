import "reflect-metadata"
import express, { application } from  "express";
import router from "./services/categoria/categoria.router";
import routerOrden from "./services/orden/orden.router";
import RouterFactura from "./services/factura/factura.router"
import Routerproducto from "./services/producto/producto.router"
import RouterRol from "./services/rol/rol.router";
import UsuarioRouter from "./services/usuario/usuario.router"
import productoscomporadosRouter from "./services/productosComprados/ProductosComprados.router"
import database from "../config/database";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

database.initialize()
        .then(()=> console.log("Database connected"))
        .catch(console.error)
 app.use("/api",router);
 app.use("/api",routerOrden);
 app.use("/api",RouterFactura);
 app.use("/api",RouterRol);
 app.use("/api",Routerproducto);
 app.use("/api",UsuarioRouter);
 app.use("/api",productoscomporadosRouter)

 const PUERTO = 3030;
 
app.listen(PUERTO,()=>{
    console.log(`escuchando por el puerto ${PUERTO}`)
} )