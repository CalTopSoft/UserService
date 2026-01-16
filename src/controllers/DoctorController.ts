import { Request, Response } from 'express';
import { DoctorService } from '../services/DoctorService';
import { SpecialtyService } from '../services/SpecialtyService';

export class DoctorController {
  private service: DoctorService;
  private specialtyService: SpecialtyService;

  constructor() {
    this.service = new DoctorService();
    this.specialtyService = new SpecialtyService();
  }

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const { nombre, apellido, email, especialidadId } = req.body;

      if (!nombre || !apellido || !email || !especialidadId) {
        res.status(400).json({
          error: true,
          message: 'Todos los campos son obligatorios',
          code: 'MISSING_FIELDS',
        });
        return;
      }

      // Verificar que la especialidad existe
      const specialty = await this.specialtyService.findById(especialidadId);
      if (!specialty) {
        res.status(404).json({
          error: true,
          message: 'Especialidad no encontrada',
          code: 'SPECIALTY_NOT_FOUND',
        });
        return;
      }

      const doctor = await this.service.create(req.body);
      res.status(201).json(doctor);
    } catch (error) {
      res.status(500).json({
        error: true,
        message: 'Error al crear médico',
        details: error,
      });
    }
  };

  findAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const { especialidad } = req.query;
      const doctors = await this.service.findAll(especialidad as string);
      res.status(200).json(doctors);
    } catch (error) {
      res.status(500).json({ error: true, message: 'Error al obtener médicos' });
    }
  };

  findById = async (req: Request, res: Response): Promise<void> => {
    try {
      const doctor = await this.service.findById(req.params.id);
      if (!doctor) {
        res.status(404).json({
          error: true,
          message: 'Médico no encontrado',
          code: 'NOT_FOUND',
        });
        return;
      }
      res.status(200).json(doctor);
    } catch (error) {
      res.status(500).json({ error: true, message: 'Error al obtener médico' });
    }
  };
}