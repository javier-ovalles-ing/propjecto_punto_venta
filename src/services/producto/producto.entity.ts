import {
    Entity,
    PrimaryGeneratedColumn,
    Column }
    from 'typeorm';

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
    }

    export default ProductoEntity;