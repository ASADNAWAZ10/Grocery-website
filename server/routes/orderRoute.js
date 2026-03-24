import express from 'express'
import { getAllOrders, getuserOrders, placeOrderCOD } from '../controller/orderController.js';
import authUser from '../middlewere/authUser.js';
import authSeller from '../middlewere/authSeller.js';

const orderRouter = express.Router();

orderRouter.post('/cod', authUser, placeOrderCOD)
orderRouter.post('/user', authUser, getuserOrders)
orderRouter.get('/seller', authSeller, getAllOrders)
// orderRouter.get('/paypal', authUser, placeOrderPayPal)

export default orderRouter;