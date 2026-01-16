import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('specialties')
export class Specialty {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true, length: 100 })
  nombre!: string;

  @Column({ type: 'text', nullable: true })
  descripcion?: string;
}