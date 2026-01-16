import { DataSource } from 'typeorm';
import { Patient } from '../models/Patient';
import { Doctor } from '../models/Doctor';
import { Specialty } from '../models/Specialty';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: true, // Ver queries en consola
  entities: [Patient, Doctor, Specialty],
  ssl: { rejectUnauthorized: false },
});