import {MigrationInterface, QueryRunner} from "typeorm";

export class testMigration1624202208525 implements MigrationInterface {
    name = 'testMigration1624202208525'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ADD "order" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "task" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "task" ADD "userId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "task" ADD "boardId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "task" ADD "columnId" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "columnId"`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "boardId"`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "order"`);
    }

}
