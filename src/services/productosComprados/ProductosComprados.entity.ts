import {
    Entity,
    PrimaryGeneratedColumn,
    Column, 
    ManyToOne,
    JoinColumn}
    from 'typeorm';
import OrdenEntity from '../orden/orden.entity';
import ProductoEntity from '../producto/producto.entity';

    @Entity('ProductosComprados')
    class ProductosCompradosEntity {

        @PrimaryGeneratedColumn({ name: 'idProductosComprados' })
         id: number;

        @ManyToOne(type=>ProductoEntity,(productos)=>productos.id)        
        @JoinColumn({name:"idProductos"})
        idProductos: ProductoEntity

        @ManyToOne(type=>OrdenEntity,(orden)=>orden.id)
        @JoinColumn({name:"idOrden"})
        idOrden: OrdenEntity
    }

    export default ProductosCompradosEntity;