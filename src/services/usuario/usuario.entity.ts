import {
    Entity,
    PrimaryGeneratedColumn,
    Column, 
    JoinColumn,
    OneToMany}
    from 'typeorm';
import OrdenEntity from '../orden/orden.entity';

    @Entity('Usuario')
    class UsuarioEntity {

        @PrimaryGeneratedColumn({ name: 'idUsuario' })
         id: number;

        @Column({name: 'nombre', type:"varchar", length: '100' })
        nombre:string;

        @Column({name: 'apellido', type:"varchar", length: '100'})
        apellido:string;

        @Column({name: 'documento_identidad', type:"varchar", length: '100'})
        documento_identidad:string;

        @Column({name: 'telefono', type:"varchar", length: '100'})
        telefono:string;

        @Column({name: 'correo', type:"varchar", length: '100'})
        correo:string;

        @Column({name: 'direccion', type:"text", })
        direccion:string;

        @Column({name: 'foto', type:"text", })
        foto:string;

        @OneToMany(type=>OrdenEntity,(orden)=>orden.id)
        @JoinColumn({name:"idOrden"})
        idOrden: OrdenEntity[];
    }

    export default UsuarioEntity;