import express from 'express';
import productRoutes from './routes/productRoutes'

const api = express();
api.use(express.json());

//TODO: registrar middlewares y rutas

api.get('/status', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});

api.use(productRoutes);


export default api;
