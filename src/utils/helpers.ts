/**
 * Formatea un nombre propio (primera letra mayúscula)
 */
export const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  
  /**
   * Formatea un nombre completo
   */
  export const formatFullName = (nombre: string, apellido: string): string => {
    return `${capitalizeFirstLetter(nombre)} ${capitalizeFirstLetter(apellido)}`;
  };
  
  /**
   * Valida si una fecha es válida
   */
  export const isValidDate = (date: any): boolean => {
    return date instanceof Date && !isNaN(date.getTime());
  };
  
  /**
   * Calcula la edad a partir de una fecha de nacimiento
   */
  export const calculateAge = (birthDate: Date): number => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };
  
  /**
   * Formatea una fecha a formato DD/MM/YYYY
   */
  export const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  
  /**
   * Valida formato de email
   */
  export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  /**
   * Valida formato de teléfono (10 dígitos)
   */
  export const isValidPhone = (phone: string): boolean => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };
  
  /**
   * Genera un mensaje de error consistente
   */
  export const createErrorResponse = (
    message: string,
    code: string,
    details?: any
  ) => {
    return {
      error: true,
      message,
      code,
      ...(details && { details }),
    };
  };
  
  /**
   * Genera un mensaje de éxito consistente
   */
  export const createSuccessResponse = (data: any, message?: string) => {
    return {
      success: true,
      ...(message && { message }),
      data,
    };
  };
  
  /**
   * Limpia espacios en blanco de un string
   */
  export const sanitizeString = (str: string): string => {
    return str.trim().replace(/\s+/g, ' ');
  };