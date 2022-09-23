import {
    Entity,
    PrimaryGeneratedColumn,
    Column,OneToMany }
    from 'typeorm';
import ProductoEntity from '../producto/producto.entity';

    @Entity('Categoria')
    class CategoryEntity {

        @PrimaryGeneratedColumn({ name: 'idCategoria' })
         id: number;

        @Column({name: 'Nombre', length: '100' })
        Nombre:string;

        @Column({name: 'detalles', type:'text'})
        detalles:string;

        @OneToMany((()=>ProductoEntity),(producto) => producto.id)
        ProductoId: ProductoEntity[];
    }

    export default CategoryEntity;