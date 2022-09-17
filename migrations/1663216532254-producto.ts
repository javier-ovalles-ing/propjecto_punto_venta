import {
    MigrationInterface,
    QueryRunner,
    Table
} from "typeorm";

export class producto1663216532254 implements MigrationInterface {
    name = 'producto1663216532254'

    public async up(queryRunner: QueryRunner): Promise < void > {
        const productoTable = new Table({
            name: 'Producto',
            columns: [{
                    name: 'idProducto',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'Nombre',
                    type: 'varchar',
                    length: '45'
                },
                {
                    name: 'descripcion',
                    type: 'text',
                },
                {
                    name: 'imagen',
                    type: 'text',
                }
            ],
        });

        await queryRunner.createTable(productoTable, true);
    }

    public async down(queryRunner: QueryRunner): Promise < void > {
        await queryRunner.dropTable('producto');
    }

}