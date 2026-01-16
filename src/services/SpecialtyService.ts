import { Repository } from 'typeorm';
import { Specialty } from '../models/Specialty';
import { AppDataSource } from '../config/database';

export class SpecialtyService {
  private repository: Repository<Specialty>;

  constructor() {
    this.repository = AppDataSource.getRepository(Specialty);
  }

  async create(data: Partial<Specialty>): Promise<Specialty> {
    const specialty = this.repository.create(data);
    return await this.repository.save(specialty);
  }

  async findAll(): Promise<Specialty[]> {
    return await this.repository.find();
  }

  async findById(id: string): Promise<Specialty | null> {
    return await this.repository.findOne({ where: { id } });
  }
}