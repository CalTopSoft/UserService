/**
 * Códigos de error de la aplicación
 */
export const ERROR_CODES = {
    // Errores de validación
    VALIDATION_ERROR: 'VALIDATION_ERROR',
    MISSING_FIELDS: 'MISSING_FIELDS',
    INVALID_FORMAT: 'INVALID_FORMAT',
    
    // Errores de recursos
    NOT_FOUND: 'NOT_FOUND',
    DUPLICATE_EMAIL: 'DUPLICATE_EMAIL',
    DUPLICATE_ENTRY: 'DUPLICATE_ENTRY',
    
    // Errores de especialidades
    SPECIALTY_NOT_FOUND: 'SPECIALTY_NOT_FOUND',
    DOCTOR_NOT_FOUND: 'DOCTOR_NOT_FOUND',
    PATIENT_NOT_FOUND: 'PATIENT_NOT_FOUND',
    
    // Errores del servidor
    INTERNAL_ERROR: 'INTERNAL_ERROR',
    DATABASE_ERROR: 'DATABASE_ERROR',
    CONNECTION_ERROR: 'CONNECTION_ERROR',
  } as const;
  
  /**
   * Mensajes de error
   */
  export const ERROR_MESSAGES = {
    PATIENT_NOT_FOUND: 'Paciente no encontrado',
    DOCTOR_NOT_FOUND: 'Médico no encontrado',
    SPECIALTY_NOT_FOUND: 'Especialidad no encontrada',
    DUPLICATE_EMAIL: 'El email ya está registrado',
    MISSING_FIELDS: 'Todos los campos son obligatorios',
    INVALID_EMAIL: 'El email no es válido',
    INVALID_PHONE: 'El teléfono debe tener 10 dígitos',
    INVALID_DATE: 'La fecha no es válida',
    DATABASE_ERROR: 'Error en la base de datos',
    INTERNAL_ERROR: 'Error interno del servidor',
  } as const;
  
  /**
   * Mensajes de éxito
   */
  export const SUCCESS_MESSAGES = {
    PATIENT_CREATED: 'Paciente creado exitosamente',
    DOCTOR_CREATED: 'Médico creado exitosamente',
    PATIENT_UPDATED: 'Paciente actualizado exitosamente',
    DOCTOR_UPDATED: 'Médico actualizado exitosamente',
    PATIENT_DELETED: 'Paciente eliminado exitosamente',
    DOCTOR_DELETED: 'Médico eliminado exitosamente',
  } as const;
  
  /**
   * Códigos de estado HTTP
   */
  export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503,
  } as const;
  
  /**
   * Especialidades médicas disponibles (IDs fijos después de la primera carga)
   */
  export const SPECIALTIES = {
    CARDIOLOGIA: 'Cardiología',
    PEDIATRIA: 'Pediatría',
    DERMATOLOGIA: 'Dermatología',
    NEUROLOGIA: 'Neurología',
    TRAUMATOLOGIA: 'Traumatología',
  } as const;
  
  /**
   * Configuración de la aplicación
   */
  export const APP_CONFIG = {
    DEFAULT_PORT: 3001,
    MAX_PHONE_LENGTH: 10,
    MIN_NAME_LENGTH: 2,
    MAX_NAME_LENGTH: 100,
    MIN_AGE: 0,
    MAX_AGE: 120,
  } as const;
  
  /**
   * Regex patterns
   */
  export const REGEX_PATTERNS = {
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE: /^[0-9]{10}$/,
    UUID: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
  } as const;