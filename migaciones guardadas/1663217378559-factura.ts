import {
  MigrationInterface,
  QueryRunner,
  Table
} from "typeorm";

export class factura1663217378559 implements MigrationInterface {
  name = 'factura1663217378559'

  public async up(queryRunner: QueryRunner): Promise < void > {
    const facturaTable = new Table({
      name: 'factura',
      columns: [{
          name: 'idFactura',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'fecha',
          type: "timestamp",
          default: "now()",

        },
        {
          name: 'monto',
          type: 'float',
        }
      ],
    });

    await queryRunner.createTable(facturaTable, true);
  }

  public async down(queryRunner: QueryRunner): Promise < void > {
    await queryRunner.dropTable('factura');
  }

}