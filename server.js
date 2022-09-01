import http from 'http';
import api from './api/api.js';
import config from './api/config/index.js';
import database from './api/config/db.js';

const server = http.createServer(api);

server.on('listening', () => {
  console.log('Server corriendo en el puerto', config.server.port);
});

server.on('error', () => {
  console.log('Error al ejecutar el server en el puerto', config.server.port);
});

server.listen(config.server.port);
database();