require('dotenv').config();
const os = require('os');
const express = require('express');
const cors = require('cors');
const Database = require('./src/Database');
const SeedService = require('./src/SeedService');

// Importacion de rutas
const authRoutes = require('./src/authRoutes');
const userRoutes = require('./src/userRoutes');
const movieRoutes = require('./src/movieRoutes');
const commentRoutes = require('./src/commentRoutes');

const app = express();

// Middlewares Globales
app.use(cors());
app.use(express.json());

// Configuracion de Endpoints
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/comments', commentRoutes);

// Endpoint de estado del servidor
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'API de Cotufera operativa',
    data: {
      storageMode: Database.mode,
      timestamp: new Date().toISOString()
    }
  });
});

// Manejador de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Ruta no encontrada',
    data: null
  });
});

// Funcion de inicializacion
const startServer = async () => {
  await Database.connect();
  await SeedService.seedIfNeeded();

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, '0.0.0.0', () => {
    const nets = os.networkInterfaces();
    const lanIps = [];
    for (const name of Object.keys(nets)) {
      for (const net of nets[name] || []) {
        if (net.family === 'IPv4' && !net.internal) lanIps.push(net.address);
      }
    }
    console.log(`Servidor de Cotufera corriendo en http://localhost:${PORT}`);
    if (lanIps.length) {
      console.log(`IPs en red local para el APK / celular: ${lanIps.map(ip => `http://${ip}:${PORT}`).join('  |  ')}`);
    }
  });
};

startServer();
