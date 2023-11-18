import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateServerTenantRelations1700331293247 implements MigrationInterface {
    name = 'CreateServerTenantRelations1700331293247'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."server_tenants_status_enum" AS ENUM('Running', 'Failure', 'Maintainence', 'Unavailable')`);
        await queryRunner.query(`CREATE TYPE "public"."server_tenants_ssl_enum" AS ENUM('Expired', 'OnDate')`);
        await queryRunner.query(`CREATE TABLE "server_tenants" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL, "status" "public"."server_tenants_status_enum" NOT NULL DEFAULT 'Running', "ssl" "public"."server_tenants_ssl_enum" NOT NULL DEFAULT 'OnDate', "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "server_id" integer, CONSTRAINT "UQ_9ed1126a5d796148adfc2885291" UNIQUE ("uuid"), CONSTRAINT "PK_bff55895326ecf136558b1ffe3d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "server" ADD "oS" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "server" ADD "dist" character varying(255) NOT NULL`);
        await queryRunner.query(`CREATE TYPE "public"."server_type_enum" AS ENUM('Fiber', 'Hfc', 'Voip')`);
        await queryRunner.query(`ALTER TABLE "server" ADD "type" "public"."server_type_enum" NOT NULL DEFAULT 'Fiber'`);
        await queryRunner.query(`ALTER TABLE "server_tenants" ADD CONSTRAINT "FK_6e5196534aff5e20fb9ed3d944d" FOREIGN KEY ("server_id") REFERENCES "server"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "server_tenants" DROP CONSTRAINT "FK_6e5196534aff5e20fb9ed3d944d"`);
        await queryRunner.query(`ALTER TABLE "server" DROP COLUMN "type"`);
        await queryRunner.query(`DROP TYPE "public"."server_type_enum"`);
        await queryRunner.query(`ALTER TABLE "server" DROP COLUMN "dist"`);
        await queryRunner.query(`ALTER TABLE "server" DROP COLUMN "oS"`);
        await queryRunner.query(`DROP TABLE "server_tenants"`);
        await queryRunner.query(`DROP TYPE "public"."server_tenants_ssl_enum"`);
        await queryRunner.query(`DROP TYPE "public"."server_tenants_status_enum"`);
    }

}
