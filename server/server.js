import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './config/db.js';
import 'dotenv/config';
import userRouter from './routes/UserRoute.js';
import sellerRouter from './routes/SellerRoute.js';
import connectCloudinary from './config/Cloudinary.js';
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/CartRoute.js';
import addressRouter from './routes/addressRoute.js';
import orderRouter from './routes/orderRoute.js';


const app = express();
const port = process.env.PORT || 5000;

await connectDB()
await connectCloudinary()

//Allow Multiple Origins
const allowdOrigins = ["http://localhost:5173"]

//Middle Configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowdOrigins, credentials: true }))

app.get('/', (req, res) => res.send('API is Working'))
app.use('/api/user', userRouter)
app.use('/api/seller', sellerRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/address', addressRouter)
app.use('api/order', orderRouter)



if (process.env.NODE_ENV !== "production") {
    app.listen(5000, () => {
      console.log("Server running");
    });
  }
  
  export default app;
