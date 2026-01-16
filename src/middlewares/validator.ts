import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

// Middleware para validar resultados
export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: true,
      message: 'Errores de validación',
      code: 'VALIDATION_ERROR',
      details: errors.array(),
    });
  }
  next();
};

// Validaciones para pacientes
export const patientValidation = [
  body('nombre')
    .trim()
    .notEmpty()
    .withMessage('El nombre es obligatorio')
    .isLength({ min: 2, max: 100 })
    .withMessage('El nombre debe tener entre 2 y 100 caracteres'),
  
  body('apellido')
    .trim()
    .notEmpty()
    .withMessage('El apellido es obligatorio')
    .isLength({ min: 2, max: 100 })
    .withMessage('El apellido debe tener entre 2 y 100 caracteres'),
  
  body('email')
    .trim()
    .notEmpty()
    .withMessage('El email es obligatorio')
    .isEmail()
    .withMessage('Debe ser un email válido'),
  
  body('telefono')
    .trim()
    .notEmpty()
    .withMessage('El teléfono es obligatorio')
    .matches(/^[0-9]{10}$/)
    .withMessage('El teléfono debe tener 10 dígitos'),
  
  body('fechaNacimiento')
    .notEmpty()
    .withMessage('La fecha de nacimiento es obligatoria')
    .isDate()
    .withMessage('Debe ser una fecha válida'),
  
  validate,
];

// Validaciones para médicos
export const doctorValidation = [
  body('nombre')
    .trim()
    .notEmpty()
    .withMessage('El nombre es obligatorio')
    .isLength({ min: 2, max: 100 })
    .withMessage('El nombre debe tener entre 2 y 100 caracteres'),
  
  body('apellido')
    .trim()
    .notEmpty()
    .withMessage('El apellido es obligatorio')
    .isLength({ min: 2, max: 100 })
    .withMessage('El apellido debe tener entre 2 y 100 caracteres'),
  
  body('email')
    .trim()
    .notEmpty()
    .withMessage('El email es obligatorio')
    .isEmail()
    .withMessage('Debe ser un email válido'),
  
  body('especialidadId')
    .notEmpty()
    .withMessage('La especialidad es obligatoria')
    .isUUID()
    .withMessage('El ID de especialidad debe ser un UUID válido'),
  
  validate,
];