require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Database = require('./src/Database');

// Importacion de rutas
const authRoutes = require('./src/authRoutes');
const movieRoutes = require('./src/movieRoutes');
const commentRoutes = require('./src/commentRoutes');

const app = express();

// Middlewares Globales
app.use(cors());
app.use(express.json());

// Configuracion de Endpoints
app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/comments', commentRoutes);

// Manejador de rutas no encontradas (Opcional pero recomendado)
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Ruta no encontrada', 
    data: null 
  });
});

// Funcion de inicializacion
const startServer = async () => {
  // 1. Conectamos a la base de datos
  await Database.connect();
  
  // 2. Levantamos el servidor HTTP
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor de Cotufera corriendo en http://localhost:${PORT}`);
  });
};

startServer();