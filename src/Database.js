const mongoose = require('mongoose');
const { LocalStore } = require('./LocalStore');

class Database {
  static mode = 'local'; // 'mongo' | 'local'

  static async connect() {
    const uri = process.env.MONGO_URI || '';
    const isPlaceholder = !uri || uri.includes('cluster0.xxxxx.mongodb.net') || uri.includes('<password>');

    if (!isPlaceholder) {
      try {
        await mongoose.connect(uri, { serverSelectionTimeoutMS: 4000 });
        this.mode = 'mongo';
        console.log('[OK] Conexion exitosa a MongoDB Atlas');
        return;
      } catch (error) {
        console.warn('[WARN] No se pudo conectar a MongoDB remoto (' + error.message + '). Activando motor persistente local...');
      }
    } else {
      console.log('[INFO] URI de MongoDB de ejemplo detectada. Activando motor de base de datos persistente local (data/cotufera-db.json)...');
    }

    this.mode = 'local';
    LocalStore.init();
    console.log('[OK] Base de datos local de Cotufera lista y sincronizada');
  }

  static isMongo() {
    return this.mode === 'mongo' && mongoose.connection.readyState === 1;
  }
}

module.exports = Database;
