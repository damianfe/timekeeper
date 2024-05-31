import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './presentation/routes/user.routes';
import projectRoutes from './presentation/routes/project.routes';
import taskRoutes from'./presentation/routes/task.routes'
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Configurar rutas
app.use('/api/auth', authRoutes);
app.use('/api', projectRoutes);
app.use('/api', taskRoutes);
// Opciones de conexión (agregar según sea necesario)
const mongooseOptions: mongoose.ConnectOptions = {
  // Aquí puedes agregar cualquier otra opción necesaria
};

// Conectar a la base de datos
mongoose.connect('mongodb+srv://damianfernandezdev:root@cluster0.ackid4h.mongodb.net/freelance_timekeeper', mongooseOptions)
.then(() => {
  console.log('Conectado a la base de datos MongoDB');
  // Iniciar el servidor
  app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
  });
})
.catch(err => {
  console.error('Error al conectar a la base de datos:', err);
});
