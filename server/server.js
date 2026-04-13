import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './config/db.js';
import 'dotenv/config';
import UserRoute from './routes/UserRoute.js';
import sellerRouter from './routes/SellerRoute.js';
import Cloudinary from './config/Cloudinary.js';
import productRouter from './routes/productRoute.js'
import CartRoute from './routes/CartRoute.js';
import addressRoute from './routes/addressRoute.js';
import orderRoute from './routes/orderRoute.js';



const app = express();
const port = process.env.PORT || 5000;

await connectDB()
await Cloudinary()

//Allow Multiple Origins
const allowdOrigins = ["http://localhost:5173"]

//Middle Configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowdOrigins, credentials: true }))

app.get('/', async (req, res) => res.send('API is Working'))
app.use('/api/user', UserRoute)
app.use('/api/seller', sellerRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', CartRoute)
app.use('/api/address', addressRoute)
app.use('/api/order', orderRoute)



if (process.env.NODE_ENV !== "production") {
    app.listen(5000, () => {
      console.log("Server running");
    });
  }
  
 module.exports = app;
