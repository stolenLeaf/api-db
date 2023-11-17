import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateServerTable1700256314655 implements MigrationInterface {
  name = 'CreateServerTable1700256314655';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "server" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL, "server_name" character varying(255) NOT NULL, "server_ip" character varying(255) NOT NULL, "ip" character varying(255) NOT NULL, "ip_segment" character varying(255) NOT NULL, "prefix" character varying(255) NOT NULL, "mac" character varying(255) NOT NULL, "city" character varying(255) NOT NULL, "model" character varying(255) NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, CONSTRAINT "UQ_a08f00d33ff9a73bd08a2edaae5" UNIQUE ("uuid"), CONSTRAINT "PK_f8b8af38bdc23b447c0a57c7937" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "server"`);
  }
}
