import { createApp } from './app';
import { AppDataSource } from './config/database';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3001;

const startServer = async () => {
  try {
    // Inicializar base de datos
    await AppDataSource.initialize();
    console.log('✅ Database connected');

    // Crear especialidades iniciales
    const specialtyRepo = AppDataSource.getRepository('Specialty');
    const count = await specialtyRepo.count();
    if (count === 0) {
      await specialtyRepo.save([
        { nombre: 'Cardiología', descripcion: 'Especialidad del corazón' },
        { nombre: 'Pediatría', descripcion: 'Atención a niños' },
        { nombre: 'Dermatología', descripcion: 'Enfermedades de la piel' },
      ]);
      console.log('✅ Initial specialties created');
    }

    const app = createApp();
    app.listen(PORT, () => {
      console.log(`🚀 User Service running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
};

startServer();