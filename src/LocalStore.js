const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DATA_DIR = path.join(__dirname, '..', 'data');
const DB_FILE = path.join(DATA_DIR, 'cotufera-db.json');

class LocalStore {
  static data = {
    users: [],
    movies: [],
    comments: []
  };
  static models = {};
  static isInitialized = false;

  static init() {
    if (this.isInitialized) return;
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (fs.existsSync(DB_FILE)) {
      try {
        const raw = fs.readFileSync(DB_FILE, 'utf-8');
        const parsed = JSON.parse(raw);
        this.data = {
          users: parsed.users || [],
          movies: parsed.movies || [],
          comments: parsed.comments || []
        };
      } catch (err) {
        console.warn('Advertencia leyendo DB local, inicializando vacia:', err.message);
      }
    } else {
      this.persist();
    }
    this.isInitialized = true;
  }

  static persist() {
    try {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }
      fs.writeFileSync(DB_FILE, JSON.stringify(this.data, null, 2), 'utf-8');
    } catch (err) {
      console.error('Error guardando DB local:', err.message);
    }
  }

  static generateObjectId() {
    return crypto.randomBytes(12).toString('hex');
  }

  static matchesQuery(doc, query) {
    if (!query || Object.keys(query).length === 0) return true;

    for (const [key, condition] of Object.entries(query)) {
      if (key === '$or' && Array.isArray(condition)) {
        const anyMatch = condition.some(subQ => this.matchesQuery(doc, subQ));
        if (!anyMatch) return false;
        continue;
      }

      if (key === '$and' && Array.isArray(condition)) {
        const allMatch = condition.every(subQ => this.matchesQuery(doc, subQ));
        if (!allMatch) return false;
        continue;
      }

      const val = this.getNestedValue(doc, key);

      if (condition && typeof condition === 'object' && !(condition instanceof RegExp) && !(condition instanceof Date) && !Array.isArray(condition)) {
        if ('$regex' in condition) {
          const flags = condition.$options || '';
          const regex = condition.$regex instanceof RegExp
            ? condition.$regex
            : new RegExp(condition.$regex, flags);
          if (Array.isArray(val)) {
            const matched = val.some(item => {
              if (typeof item === 'string') return regex.test(item);
              if (item && typeof item === 'object' && item.name) return regex.test(item.name);
              return false;
            });
            if (!matched) return false;
          } else if (!regex.test(String(val || ''))) {
            return false;
          }
        }
        if ('$gte' in condition) {
          const target = condition.$gte;
          if (val === undefined || val === null || val < target) return false;
        }
        if ('$lte' in condition) {
          const target = condition.$lte;
          if (val === undefined || val === null || val > target) return false;
        }
        if ('$gt' in condition) {
          if (val === undefined || val === null || val <= condition.$gt) return false;
        }
        if ('$lt' in condition) {
          if (val === undefined || val === null || val >= condition.$lt) return false;
        }
        if ('$in' in condition && Array.isArray(condition.$in)) {
          if (Array.isArray(val)) {
            if (!val.some(v => condition.$in.includes(v))) return false;
          } else if (!condition.$in.includes(val)) {
            return false;
          }
        }
        if ('$ne' in condition) {
          if (String(val) === String(condition.$ne)) return false;
        }
      } else {
        if (Array.isArray(val)) {
          const exists = val.some(v => String(v) === String(condition));
          if (!exists) return false;
        } else {
          if (String(val) !== String(condition)) return false;
        }
      }
    }
    return true;
  }

  static getNestedValue(obj, pathStr) {
    if (!obj) return undefined;
    const parts = pathStr.split('.');
    let current = obj;
    for (const part of parts) {
      if (current === null || current === undefined) return undefined;
      current = current[part];
    }
    return current;
  }

  static setNestedValue(obj, pathStr, value) {
    const parts = pathStr.split('.');
    let current = obj;
    for (let i = 0; i < parts.length - 1; i++) {
      const p = parts[i];
      if (!current[p] || typeof current[p] !== 'object') {
        current[p] = {};
      }
      current = current[p];
    }
    current[parts[parts.length - 1]] = value;
  }
}

class QueryChain {
  constructor(collectionKey, filter = {}, isSingle = false) {
    this.collectionKey = collectionKey;
    this.filter = filter;
    this.isSingle = isSingle;
    this.populates = [];
    this.sortSpec = null;
    this.limitCount = null;
    this.selectFields = null;
  }

  populate(field, selectStr) {
    this.populates.push({ field, selectStr });
    return this;
  }

  sort(sortSpec) {
    this.sortSpec = sortSpec;
    return this;
  }

  limit(n) {
    this.limitCount = n;
    return this;
  }

  select(fields) {
    this.selectFields = fields;
    return this;
  }

  exec() {
    LocalStore.init();
    const list = LocalStore.data[this.collectionKey] || [];
    let results = list
      .filter(doc => LocalStore.matchesQuery(doc, this.filter))
      .map(doc => JSON.parse(JSON.stringify(doc)));

    if (this.sortSpec) {
      const entries = Object.entries(this.sortSpec);
      results.sort((a, b) => {
        for (const [field, dir] of entries) {
          const valA = LocalStore.getNestedValue(a, field);
          const valB = LocalStore.getNestedValue(b, field);
          if (valA === valB) continue;
          if (valA === undefined || valA === null) return 1;
          if (valB === undefined || valB === null) return -1;
          if (valA < valB) return dir === -1 ? 1 : -1;
          if (valA > valB) return dir === -1 ? -1 : 1;
        }
        return 0;
      });
    }

    if (this.limitCount !== null) {
      results = results.slice(0, this.limitCount);
    }

    if (this.populates.length > 0) {
      results = results.map(doc => {
        for (const pop of this.populates) {
          const refId = doc[pop.field];
          if (!refId) continue;
          let refCollection = 'users';
          if (pop.field === 'movieId') refCollection = 'movies';
          if (pop.field === 'userId') refCollection = 'users';

          const target = (LocalStore.data[refCollection] || []).find(
            item => String(item._id) === String(refId)
          );
          if (target) {
            const copy = JSON.parse(JSON.stringify(target));
            if (pop.selectStr) {
              const fields = pop.selectStr.split(/\s+/).filter(Boolean);
              const filtered = { _id: copy._id };
              fields.forEach(f => {
                if (f.startsWith('-')) {
                  delete copy[f.slice(1)];
                } else if (copy[f] !== undefined) {
                  filtered[f] = copy[f];
                }
              });
              doc[pop.field] = fields.some(f => !f.startsWith('-')) ? filtered : copy;
            } else {
              delete copy.password;
              doc[pop.field] = copy;
            }
          } else {
            doc[pop.field] = null;
          }
        }
        return doc;
      });
    }

    if (this.selectFields) {
      const fields = this.selectFields.split(/\s+/).filter(Boolean);
      results = results.map(doc => {
        const copy = { ...doc };
        fields.forEach(f => {
          if (f.startsWith('-')) {
            delete copy[f.slice(1)];
          }
        });
        return copy;
      });
    }

    if (this.isSingle) {
      return Promise.resolve(results[0] || null);
    }
    return Promise.resolve(results);
  }

  then(resolve, reject) {
    return this.exec().then(resolve, reject);
  }

  catch(reject) {
    return this.exec().catch(reject);
  }
}

function createLocalModel(modelName, collectionKey, defaultsFn, postSaveHook) {
  class DocumentModel {
    constructor(data = {}) {
      LocalStore.init();
      const now = new Date().toISOString();
      const defaults = defaultsFn ? defaultsFn() : {};
      Object.assign(this, defaults, data);
      if (!this._id) {
        this._id = LocalStore.generateObjectId();
      }
      if (!this.createdAt) this.createdAt = now;
      this.updatedAt = now;
    }

    model(name) {
      return LocalStore.models[name];
    }

    async save() {
      LocalStore.init();
      this.updatedAt = new Date().toISOString();
      const collection = LocalStore.data[collectionKey];
      const existingIndex = collection.findIndex(item => String(item._id) === String(this._id));
      const plain = JSON.parse(JSON.stringify(this));

      if (existingIndex >= 0) {
        collection[existingIndex] = plain;
      } else {
        collection.push(plain);
      }
      LocalStore.persist();

      if (postSaveHook) {
        await postSaveHook.call(this, this);
      }
      return this;
    }

    toObject() {
      return JSON.parse(JSON.stringify(this));
    }

    static find(filter = {}) {
      return new QueryChain(collectionKey, filter, false);
    }

    static findOne(filter = {}) {
      return new QueryChain(collectionKey, filter, true);
    }

    static findById(id) {
      return new QueryChain(collectionKey, { _id: id }, true);
    }

    static async findByIdAndUpdate(id, update = {}, options = {}) {
      LocalStore.init();
      const collection = LocalStore.data[collectionKey];
      const idx = collection.findIndex(item => String(item._id) === String(id));
      if (idx === -1) return null;

      const target = collection[idx];
      const changes = update.$set ? update.$set : update;
      for (const [k, v] of Object.entries(changes)) {
        if (k === '$set') continue;
        if (k.includes('.')) {
          LocalStore.setNestedValue(target, k, v);
        } else {
          target[k] = v;
        }
      }
      target.updatedAt = new Date().toISOString();
      collection[idx] = target;
      LocalStore.persist();
      return JSON.parse(JSON.stringify(target));
    }

    static async findByIdAndDelete(id) {
      LocalStore.init();
      const collection = LocalStore.data[collectionKey];
      const idx = collection.findIndex(item => String(item._id) === String(id));
      if (idx === -1) return null;
      const [removed] = collection.splice(idx, 1);
      LocalStore.persist();
      return removed;
    }

    static async deleteMany(filter = {}) {
      LocalStore.init();
      const collection = LocalStore.data[collectionKey];
      const initialLen = collection.length;
      LocalStore.data[collectionKey] = collection.filter(doc => !LocalStore.matchesQuery(doc, filter));
      LocalStore.persist();
      return { deletedCount: initialLen - LocalStore.data[collectionKey].length };
    }

    static async countDocuments(filter = {}) {
      LocalStore.init();
      const collection = LocalStore.data[collectionKey];
      return collection.filter(doc => LocalStore.matchesQuery(doc, filter)).length;
    }
  }

  LocalStore.models[modelName] = DocumentModel;
  return DocumentModel;
}

function createHybridModel(modelName, collectionKey, mongooseModel, defaultsFn, postSaveHook) {
  const LocalModel = createLocalModel(modelName, collectionKey, defaultsFn, postSaveHook);
  const Database = require('./Database');

  function HybridModel(data) {
    if (Database.isMongo()) {
      return new mongooseModel(data);
    }
    return new LocalModel(data);
  }

  const staticMethods = [
    'find',
    'findOne',
    'findById',
    'findByIdAndUpdate',
    'findByIdAndDelete',
    'deleteMany',
    'countDocuments'
  ];

  staticMethods.forEach(method => {
    HybridModel[method] = (...args) => {
      const target = Database.isMongo() ? mongooseModel : LocalModel;
      return target[method](...args);
    };
  });

  HybridModel.LocalModel = LocalModel;
  HybridModel.MongooseModel = mongooseModel;
  return HybridModel;
}

module.exports = { LocalStore, createLocalModel, createHybridModel };

