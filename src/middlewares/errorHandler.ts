import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('Error:', err);
  
  res.status(err.status || 500).json({
    error: true,
    message: err.message || 'Error interno del servidor',
    code: err.code || 'INTERNAL_ERROR',
  });
};