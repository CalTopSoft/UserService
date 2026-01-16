import { Repository } from 'typeorm';
import { Patient } from '../models/Patient';
import { AppDataSource } from '../config/database';

export class PatientService {
  private repository: Repository<Patient>;

  constructor() {
    this.repository = AppDataSource.getRepository(Patient);
  }

  async create(data: Partial<Patient>): Promise<Patient> {
    const patient = this.repository.create(data);
    return await this.repository.save(patient);
  }

  async findAll(): Promise<Patient[]> {
    return await this.repository.find();
  }

  async findById(id: string): Promise<Patient | null> {
    return await this.repository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<Patient | null> {
    return await this.repository.findOne({ where: { email } });
  }
}