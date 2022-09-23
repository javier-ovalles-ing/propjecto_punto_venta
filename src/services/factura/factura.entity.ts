import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    Column, 
    OneToMany,
    JoinColumn}
    from 'typeorm';
import OrdenEntity from '../orden/orden.entity';

    @Entity('Factura')
    class FacturaEntity {

        @PrimaryGeneratedColumn({ name: 'idFactura'})
         id: number;

         @CreateDateColumn({name:'fecha'})
         fecha: Date;

        @Column({name: 'monto', type:'float'})
        monto:number;

        @OneToMany(type=>OrdenEntity,(orden)=>orden.id)
        @JoinColumn({name:"idOrden"})
        idOrden:OrdenEntity[];
    }

    export default FacturaEntity;