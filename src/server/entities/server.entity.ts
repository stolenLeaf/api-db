import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { ServerTenants } from './server-tenants.entity';
import { ServerType } from '../../utils/enum/server-type';


@Entity({ name: 'server' })
export class Server {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'uuid', unique: true })
  uuid: string;

  @Column({ name: 'server_name', type: 'varchar', length: 255 })
  serverName: string;

  @Column({ name: 'server_ip', type: 'varchar', length: 255 })
  serverIp: string;

  @Column({ type: 'varchar', length: 255 })
  ip: string;

  @Column({ name: 'ip_segment', type: 'varchar', length: 255 })
  ipSegment: string;

  @Column({ type: 'varchar', length: 255 })
  prefix: string;

  @Column({ type: 'varchar', length: 255 })
  mac: string;

  @Column({ type: 'varchar', length: 255 })
  city: string;

  @Column({ type: 'varchar', length: 255 })
  model: string;

  @Column({ type: 'varchar', length: 255 })
  oS: string;

  @Column({ type: 'varchar', length: 255 })
  dist: string;

  @Column({
    type: 'enum',
    enum: ServerType,
    default: ServerType.FIBER
  })
  type: ServerType



  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamptz',
  })
  deletedAt?: Date;


  @OneToOne(() => ServerTenants, (tenants) => tenants.server)
  tenant: ServerTenants

}
