import { Router } from 'express';
import { PatientController } from '../controllers/PatientController';
import { DoctorController } from '../controllers/DoctorController';
import { SpecialtyService } from '../services/SpecialtyService';
import { patientValidation, doctorValidation } from '../middlewares/validator';

const router = Router();
const patientController = new PatientController();
const doctorController = new DoctorController();
const specialtyService = new SpecialtyService();

// Pacientes (con validación)
router.post('/patients', patientValidation, patientController.create);
router.get('/patients', patientController.findAll);
router.get('/patients/:id', patientController.findById);

// Médicos (con validación)
router.post('/doctors', doctorValidation, doctorController.create);
router.get('/doctors', doctorController.findAll);
router.get('/doctors/:id', doctorController.findById);

// Especialidades
router.get('/specialties', async (req, res) => {
  try {
    const specialties = await specialtyService.findAll();
    res.json(specialties);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener especialidades' });
  }
});

export default router;