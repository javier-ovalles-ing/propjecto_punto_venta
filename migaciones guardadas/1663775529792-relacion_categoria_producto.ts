import { MigrationInterface, QueryRunner } from "typeorm";

export class relacionCategoriaProducto1663775529792 implements MigrationInterface {
    name = 'relacionCategoriaProducto1663775529792'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Producto\` (\`idProducto\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(100) NOT NULL, \`descripcion\` text NOT NULL, \`imagen\` text NOT NULL, \`idCategoria\` int NULL, PRIMARY KEY (\`idProducto\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Categoria\` (\`idCategoria\` int NOT NULL AUTO_INCREMENT, \`Nombre\` varchar(100) NOT NULL, \`detalles\` text NOT NULL, PRIMARY KEY (\`idCategoria\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Factura\` (\`idFactura\` int NOT NULL AUTO_INCREMENT, \`fecha\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`monto\` float NOT NULL, PRIMARY KEY (\`idFactura\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Orden\` (\`idOrden\` int NOT NULL AUTO_INCREMENT, \`precio\` float NOT NULL, \`cantidad\` int NOT NULL, PRIMARY KEY (\`idOrden\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Rol\` (\`idRol\` int NOT NULL AUTO_INCREMENT, \`descripcion\` text NOT NULL, PRIMARY KEY (\`idRol\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Usuario\` (\`idUsuario\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(100) NOT NULL, \`apellido\` varchar(100) NOT NULL, \`documento_identidad\` varchar(100) NOT NULL, \`telefono\` varchar(100) NOT NULL, \`correo\` varchar(100) NOT NULL, \`direccion\` text NOT NULL, \`foto\` text NOT NULL, PRIMARY KEY (\`idUsuario\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Producto\` ADD CONSTRAINT \`FK_5711d8914eb002a8755b4c847e4\` FOREIGN KEY (\`idCategoria\`) REFERENCES \`Categoria\`(\`idCategoria\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Producto\` DROP FOREIGN KEY \`FK_5711d8914eb002a8755b4c847e4\``);
        await queryRunner.query(`DROP TABLE \`Usuario\``);
        await queryRunner.query(`DROP TABLE \`Rol\``);
        await queryRunner.query(`DROP TABLE \`Orden\``);
        await queryRunner.query(`DROP TABLE \`Factura\``);
        await queryRunner.query(`DROP TABLE \`Categoria\``);
        await queryRunner.query(`DROP TABLE \`Producto\``);
    }

}
