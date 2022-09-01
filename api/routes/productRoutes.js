import express  from "express";
import * as productController from '../controllers/productController'
import  createProductValidator from '../middlewares/createProductValidator'

const router=express.Router();

router.route('/products').post(createProductValidator, productController.createProduct);
export default router;