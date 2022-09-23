import { MigrationInterface, QueryRunner,Table } from "typeorm";

export class rol1663216964751 implements MigrationInterface {
    name = 'rol1663216964751'

    public async up(queryRunner: QueryRunner): Promise<void> {
        const rolTable = new Table({
            name: 'rol',
            columns: [
              {
                name: 'idRol',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'descripcion',
                type: 'text',
              
              }
            ],
          });

          await queryRunner.createTable(rolTable, true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('rol');
    }
}
