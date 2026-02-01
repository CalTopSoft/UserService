import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('patients')
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 100 })
  nombre!: string;

  @Column({ length: 100 })
  apellido!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ length: 20 })
  telefono!: string;

  @Column({ type: 'date' })
  fechaNacimiento!: Date;

  // 🔥 NUEVO CAMPO
  @Column({ length: 255 })
  password!: string;

  @CreateDateColumn()
  createdAt!: Date;
}
