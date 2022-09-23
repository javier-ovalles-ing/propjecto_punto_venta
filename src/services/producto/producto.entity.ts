import {
    Entity,
    PrimaryGeneratedColumn,
    Column, 
    ManyToOne,
    DataTypeNotSupportedError,
    JoinColumn,
    OneToMany}
    from 'typeorm';
import CategoryEntity from '../categoria/categoria.entity';
import OrdenEntity from '../orden/orden.entity';
import ProductosCompradosEntity from '../productosComprados/ProductosComprados.entity';

    @Entity('Producto')
    class ProductoEntity {

        @PrimaryGeneratedColumn({ name: 'idProducto' })
         id: number;

        @Column({name: 'nombre', length: '100' })
        nombre:string;

        @Column({name: 'descripcion', type:'text'})
        descripcion:string;

        @Column({name: 'imagen', type:'text'})
        imagen:string;

        @ManyToOne((type)=>CategoryEntity,(categoria)=>categoria.id)
        @JoinColumn({name:"idCategoria"})
        idCategoria: CategoryEntity;

        @OneToMany(type=>OrdenEntity,(orden)=>orden.id)
        @JoinColumn({name:"idOrden"})
        idOrden: OrdenEntity[];

        @OneToMany(type=>ProductosCompradosEntity,(productosComprados)=>productosComprados.id)        
        @JoinColumn({name:"productosComprados"})
        productosComprados:ProductosCompradosEntity;
    }
    

    export default ProductoEntity;