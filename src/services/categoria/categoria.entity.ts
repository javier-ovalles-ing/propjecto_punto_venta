import {
    Entity,
    PrimaryGeneratedColumn,
    Column }
    from 'typeorm';

    @Entity('Categoria')
    class CategoryEntity {

        @PrimaryGeneratedColumn({ name: 'idCategoria' })
         id: number;

        @Column({name: 'Nombre', length: '100' })
        Nombre:string;

        @Column({name: 'detalles', type:'text'})
        detalles:string;
    }

    export default CategoryEntity;