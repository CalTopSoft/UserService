import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Specialty } from './Specialty';

@Entity('doctors')
export class Doctor {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 100 })
  nombre!: string;

  @Column({ length: 100 })
  apellido!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  especialidadId!: string;

  @ManyToOne(() => Specialty)
  @JoinColumn({ name: 'especialidadId' })
  especialidad!: Specialty;

  @CreateDateColumn()
  createdAt!: Date;
}