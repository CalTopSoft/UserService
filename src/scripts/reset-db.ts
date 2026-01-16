import 'dotenv/config';
import { Client } from 'pg';

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Render necesita esto
  },
});

async function resetDatabase() {
  try {
    await client.connect();
    console.log('🟢 Conectado a la BD');

    await client.query(`
      DROP SCHEMA public CASCADE;
      CREATE SCHEMA public;
      GRANT ALL ON SCHEMA public TO public;
    `);

    console.log('🔥 Base de datos reseteada completamente');
  } catch (error) {
    console.error('❌ Error reseteando la BD:', error);
  } finally {
    await client.end();
  }
}

resetDatabase();
