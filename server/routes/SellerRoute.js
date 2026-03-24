import express from 'express'
import { isSellerAuth, sellerLogin, Sellerlogout } from '../controller/SellerController.js'
import authSeller from '../middlewere/authSeller.js';

const sellerRouter = express.Router();

sellerRouter.post('/login', sellerLogin)
sellerRouter.post('/is-auth',authSeller, isSellerAuth)
sellerRouter.post('/logout', Sellerlogout)

export default sellerRouter;