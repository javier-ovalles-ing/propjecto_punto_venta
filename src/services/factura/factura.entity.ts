import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    Column }
    from 'typeorm';

    @Entity('Factura')
    class FacturaEntity {

        @PrimaryGeneratedColumn({ name: 'idFactura'})
         id: number;

         @CreateDateColumn({name:'fecha'})
         fecha: Date;

        @Column({name: 'monto', type:'float'})
        monto:number;
    }

    export default FacturaEntity;