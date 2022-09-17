import {
    Entity,
    PrimaryGeneratedColumn,
    Column }
    from 'typeorm';

    @Entity('Orden')
    class OrdenEntity {

        @PrimaryGeneratedColumn({ name: 'idOrden' })
         id: number;

        @Column({name: 'precio', type: 'float' })
        precio:number;

        @Column({name: 'cantidad', type:'int'})
        cantidad:number;
    }

    export default OrdenEntity;