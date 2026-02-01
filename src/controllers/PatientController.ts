import { Request, Response } from 'express';
import { PatientService } from '../services/PatientService';

export class PatientController {
    private service: PatientService;

    constructor() {
        this.service = new PatientService();
    }

    create = async (req: Request, res: Response): Promise<void> => {
        try {
            const { nombre, apellido, email, telefono, fechaNacimiento } = req.body;

            // Validar campos requeridos
            if (!nombre || !apellido || !email || !telefono || !fechaNacimiento) {
                res.status(400).json({
                    error: true,
                    message: 'Todos los campos son obligatorios',
                    code: 'MISSING_FIELDS',
                });
                return;
            }

            // Verificar email duplicado
            const existing = await this.service.findByEmail(email);
            if (existing) {
                res.status(409).json({
                    error: true,
                    message: 'El email ya está registrado',
                    code: 'DUPLICATE_EMAIL',
                });
                return;
            }

            const patient = await this.service.create(req.body);
            res.status(201).json(patient);
        } catch (error) {
            res.status(500).json({
                error: true,
                message: 'Error al crear paciente',
                details: error,
            });
        }
    };

    findAll = async (req: Request, res: Response): Promise<void> => {
        try {
            const patients = await this.service.findAll();
            res.status(200).json(patients);
        } catch (error) {
            res.status(500).json({ error: true, message: 'Error al obtener pacientes' });
        }
    };
    findById = async (req: Request, res: Response): Promise<void> => {
        try {
            const patient = await this.service.findById(req.params.id);
            if (!patient) {
                res.status(404).json({
                    error: true,
                    message: 'Paciente no encontrado',
                    code: 'NOT_FOUND',
                });
                return;
            }
            res.status(200).json(patient);
        } catch (error) {
            res.status(500).json({ error: true, message: 'Error al obtener paciente' });
        }
    };
    login = async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body;

            // Validar campos requeridos
            if (!email || !password) {
                res.status(400).json({
                    error: true,
                    message: 'Email y contraseña son obligatorios',
                    code: 'MISSING_CREDENTIALS',
                });
                return;
            }

            // Intentar login
            const patient = await this.service.login(email, password);

            if (!patient) {
                res.status(401).json({
                    error: true,
                    message: 'Credenciales inválidas',
                    code: 'INVALID_CREDENTIALS',
                });
                return;
            }

            // Generar token simple (base64 de id:timestamp)
            const token = Buffer.from(`${patient.id}:${Date.now()}`).toString('base64');

            res.status(200).json({
                success: true,
                message: 'Login exitoso',
                token,
                user: {
                    id: patient.id,
                    nombre: patient.nombre,
                    apellido: patient.apellido,
                    email: patient.email,
                },
            });
        } catch (error) {
            res.status(500).json({
                error: true,
                message: 'Error en login',
                details: error,
            });
        }
    };
}
