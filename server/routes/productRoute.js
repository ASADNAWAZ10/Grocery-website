import express from 'express';
import { upload } from '../config/multer.js';
import authSeller from '../middlewere/authSeller.js';
import { addproduct, changeStock, productById, productList } from '../controller/ProductController.js';

const productRouter = express.Router();

productRouter.post('/add', upload.array(['images']), authSeller, addproduct)
productRouter.get('/list', productList)
productRouter.get('/id', productById)
productRouter.get('/stock', authSeller, changeStock)

export default productRouter