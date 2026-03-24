import express from 'express'
import authUser from "../middlewere/authUser.js";
import { updateCart } from "../controller/cartController.js";

const cartRouter = express.Router();

cartRouter.post('/udpate', authUser, updateCart)

export default cartRouter