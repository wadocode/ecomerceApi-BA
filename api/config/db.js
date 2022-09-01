import mongoose from "mongoose";
import config from './index.js';

const db = mongoose.connection;

db.on('connecting', () => {
  console.log('Intentando conectar a la base de datos 💛');
});

db.on('connected', () => {
  console.log('Se conectó a la base 💚');
});

db.on('error', () => {
  console.log('Error en la conexión de DB ❤');
});

export default () => {
  mongoose.connect(config.database.uri);
};