const mongoose = require('mongoose');

class Database {
  static async connect() {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log(' Conexión exitosa a MongoDB Atlas');
    } catch (error) {
      console.error(' Error conectando a la base de datos:', error.message);
      process.exit(1); // Detiene la ejecución si falla la base de datos
    }
  }
}

module.exports = Database;