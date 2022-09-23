import { MigrationInterface, QueryRunner } from "typeorm";

export class relacionesTablas1663784209665 implements MigrationInterface {
    name = 'relacionesTablas1663784209665'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Factura\` (\`idFactura\` int NOT NULL AUTO_INCREMENT, \`fecha\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`monto\` float NOT NULL, PRIMARY KEY (\`idFactura\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Usuario\` (\`idUsuario\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(100) NOT NULL, \`apellido\` varchar(100) NOT NULL, \`documento_identidad\` varchar(100) NOT NULL, \`telefono\` varchar(100) NOT NULL, \`correo\` varchar(100) NOT NULL, \`direccion\` text NOT NULL, \`foto\` text NOT NULL, PRIMARY KEY (\`idUsuario\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Orden\` (\`idOrden\` int NOT NULL AUTO_INCREMENT, \`precio\` float NOT NULL, \`cantidad\` int NOT NULL, \`idProducto\` int NULL, \`idUsuario\` int NULL, \`idFactura\` int NULL, PRIMARY KEY (\`idOrden\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Producto\` (\`idProducto\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(100) NOT NULL, \`descripcion\` text NOT NULL, \`imagen\` text NOT NULL, \`idCategoria\` int NULL, PRIMARY KEY (\`idProducto\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Categoria\` (\`idCategoria\` int NOT NULL AUTO_INCREMENT, \`Nombre\` varchar(100) NOT NULL, \`detalles\` text NOT NULL, PRIMARY KEY (\`idCategoria\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ProductosComprados\` (\`idProductosComprados\` int NOT NULL AUTO_INCREMENT, \`idProductos\` int NULL, \`idOrden\` int NULL, PRIMARY KEY (\`idProductosComprados\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Rol\` (\`idRol\` int NOT NULL AUTO_INCREMENT, \`descripcion\` text NOT NULL, PRIMARY KEY (\`idRol\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Orden\` ADD CONSTRAINT \`FK_d9a6800a753c1b300f3f6ecd701\` FOREIGN KEY (\`idProducto\`) REFERENCES \`Producto\`(\`idProducto\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Orden\` ADD CONSTRAINT \`FK_4753b34bab557b15b3432148de3\` FOREIGN KEY (\`idUsuario\`) REFERENCES \`Usuario\`(\`idUsuario\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Orden\` ADD CONSTRAINT \`FK_d1c0cd186f7a2918481df930494\` FOREIGN KEY (\`idFactura\`) REFERENCES \`Factura\`(\`idFactura\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Producto\` ADD CONSTRAINT \`FK_5711d8914eb002a8755b4c847e4\` FOREIGN KEY (\`idCategoria\`) REFERENCES \`Categoria\`(\`idCategoria\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ProductosComprados\` ADD CONSTRAINT \`FK_fb084202eb03938440739cd3384\` FOREIGN KEY (\`idProductos\`) REFERENCES \`Producto\`(\`idProducto\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`ProductosComprados\` ADD CONSTRAINT \`FK_8361c2e06f0b10d77fce838319e\` FOREIGN KEY (\`idOrden\`) REFERENCES \`Orden\`(\`idOrden\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ProductosComprados\` DROP FOREIGN KEY \`FK_8361c2e06f0b10d77fce838319e\``);
        await queryRunner.query(`ALTER TABLE \`ProductosComprados\` DROP FOREIGN KEY \`FK_fb084202eb03938440739cd3384\``);
        await queryRunner.query(`ALTER TABLE \`Producto\` DROP FOREIGN KEY \`FK_5711d8914eb002a8755b4c847e4\``);
        await queryRunner.query(`ALTER TABLE \`Orden\` DROP FOREIGN KEY \`FK_d1c0cd186f7a2918481df930494\``);
        await queryRunner.query(`ALTER TABLE \`Orden\` DROP FOREIGN KEY \`FK_4753b34bab557b15b3432148de3\``);
        await queryRunner.query(`ALTER TABLE \`Orden\` DROP FOREIGN KEY \`FK_d9a6800a753c1b300f3f6ecd701\``);
        await queryRunner.query(`DROP TABLE \`Rol\``);
        await queryRunner.query(`DROP TABLE \`ProductosComprados\``);
        await queryRunner.query(`DROP TABLE \`Categoria\``);
        await queryRunner.query(`DROP TABLE \`Producto\``);
        await queryRunner.query(`DROP TABLE \`Orden\``);
        await queryRunner.query(`DROP TABLE \`Usuario\``);
        await queryRunner.query(`DROP TABLE \`Factura\``);
    }

}
