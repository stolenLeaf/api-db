import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Server } from './server.entity'
import { ServerStatus } from '../../utils/enum/server-status';
import { SslStatus } from '../../utils/enum/ssl-status';

@Entity({ name: 'server_tenants' })
export class ServerTenants {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'uuid', unique: true })
  uuid: string;

  @ManyToOne(() => Server, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'server_id' })
  server: Server

  @Column({
    type: 'enum',
    enum: ServerStatus,
    default: ServerStatus.RUNNING
  })
  status: ServerStatus

  @Column({
    type: 'enum',
    enum: SslStatus,
    default: SslStatus.ONDATE
  })
  ssl: SslStatus

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
