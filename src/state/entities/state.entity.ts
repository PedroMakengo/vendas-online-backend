import {
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('state')
export class StateEntity {
  @PrimaryGeneratedColumn('rowid')
  id: string;

  @Column({ name: 'name', nullable: false })
  name: string;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;
}
