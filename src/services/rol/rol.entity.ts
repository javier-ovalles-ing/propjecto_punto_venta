import {
    Entity,
    PrimaryGeneratedColumn,
    Column }
    from 'typeorm';

    @Entity('Rol')
    class RolEntity {

        @PrimaryGeneratedColumn({ name: 'idRol' })
         id: number;

        @Column({name: 'descripcion', type:'text'})
        descripcion:string;
    }

    export default RolEntity;