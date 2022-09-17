import { MigrationInterface, QueryRunner,Table } from "typeorm";

export class usuario1663217611883 implements MigrationInterface {
    name = 'usuario1663217611883'

    public async up(queryRunner: QueryRunner): Promise<void> {
        const usuarioTable = new Table({
            name: 'usuario',
            columns: [
              {
                name: 'idUsuario',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'nombre',
                type: 'varchar',
                length: '100'
              
              },
              {
                name: 'apellido',
                type: 'varchar', 
                length: '100'               
              },
              {
                name: 'documento_identidad',
                type: 'varchar', 
                length: '100'               
              },
              {
                name: 'telefono',
                type: 'varchar', 
                length: '100'               
              },
              {
                name: 'correo',
                type: 'varchar', 
                length: '100'               
              },
              {
                name: 'direccion',
                type: 'text',
              },
              {
                name: 'foto',
                type: 'text',
              }
            ],
          });

          await queryRunner.createTable(usuarioTable, true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuario');
    }

}
