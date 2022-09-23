import { MigrationInterface, QueryRunner,Table } from "typeorm"

export class migrationsCategory1663090496892 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const categoriaTable = new Table({
            name: 'Categoria',
            columns: [
              {
                name: 'idCategoria',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'Nombre',
                type: 'varchar',
                length: '100'
              },
              {
                name: 'detalles',
                type: 'text',                
              }
            ],
          });

          

          
          await queryRunner.createTable(categoriaTable, true);
          
          
        }
      


    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('categoria');
      
      
    }

}
