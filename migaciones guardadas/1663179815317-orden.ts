import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class orden1663179815317 implements MigrationInterface {
    name = 'orden1663179815317'

    public async up(queryRunner: QueryRunner): Promise<void> {
        const ordenTable = new Table({
            name: 'Orden',
            columns: [
              {
                name: 'idOrden',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'precio',
                type: 'float',
              
              },
              {
                name: 'cantidad',
                type: 'int',                
              }
            ],
          });

          await queryRunner.createTable(ordenTable, true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orden');
    }

}
