import { Repository } from 'typeorm';
import { Doctor } from '../models/Doctor';
import { AppDataSource } from '../config/database';

export class DoctorService {
  private repository: Repository<Doctor>;

  constructor() {
    this.repository = AppDataSource.getRepository(Doctor);
  }

  async create(data: Partial<Doctor>): Promise<Doctor> {
    const doctor = this.repository.create(data);
    return await this.repository.save(doctor);
  }

  async findAll(especialidadId?: string): Promise<Doctor[]> {
    if (especialidadId) {
      return await this.repository.find({
        where: { especialidadId },
        relations: ['especialidad'],
      });
    }
    return await this.repository.find({ relations: ['especialidad'] });
  }

  async findById(id: string): Promise<Doctor | null> {
    return await this.repository.findOne({
      where: { id },
      relations: ['especialidad'],
    });
  }
}