import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

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
}
