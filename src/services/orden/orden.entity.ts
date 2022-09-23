import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany, 
    JoinColumn,
    ManyToMany,
    ManyToOne}
    from 'typeorm';
import FacturaEntity from '../factura/factura.entity';
import ProductoEntity from '../producto/producto.entity';
import ProductosCompradosEntity from '../productosComprados/ProductosComprados.entity';
import UsuarioEntity from '../usuario/usuario.entity';

    @Entity('Orden')
    class OrdenEntity {

        @PrimaryGeneratedColumn({ name: 'idOrden' })
         id: number;

        @Column({name: 'precio', type: 'float' })
        precio:number;

        @Column({name: 'cantidad', type:'int'})
        cantidad:number;

        @ManyToOne(type=>ProductoEntity,(producto)=>producto.id)
        @JoinColumn({name:"idProducto"})
        idProducto: ProductoEntity;

        @ManyToOne(type=>UsuarioEntity,(usuario)=>usuario.id)
        @JoinColumn({name:"idUsuario"})
        idUsuario:UsuarioEntity;

        @ManyToOne(type=>FacturaEntity,(factura)=>factura.id)
        @JoinColumn({name:"idFactura"})
        idFactura:FacturaEntity;

        @OneToMany(type=>ProductosCompradosEntity,(productosComprados)=>productosComprados.id)        
        @JoinColumn({name:"productosComprados"})
        productosComprados:ProductosCompradosEntity;
    }

    export default OrdenEntity;