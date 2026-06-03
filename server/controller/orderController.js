import Order from "../models/order.js"
import Product from "../models/product.js"

//Placed Order COD : /API/order/cod
export const placeOrderCOD = async (req, res) => {
    try {
        const { userId, items, address } = req.body
        if (!address || !items ||  items.length === 0) {
            return res.json({ success: false, message: "Invalid data" })
        }
        //Calculate Amount Using Items
        let amount = 0;
        for(const item of items) {
            const product = await Product.findById(item.product);
            if(!product) return
            res.json({success:false, message: "product not found"});
            amount += product.offerPrice * item.quantity;
        }

        

        //Add Tax Change (2%)
        amount += Math.round(amount * 0.02);
        await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType: "COD",
        });
        res.json({ success: true, message: "Order Placed Successfully", amount })
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message:"Server Error"})
        
    }
}

//Get Orders by User ID : /api/order/user
export const getuserOrders = async (req, res) => {
    try {
        const { userId } = req.body
        const orders = await Order.find({
            userId,
            $or: [{ paymentType: "COD" }, { isPaid: true }]
        }).populate("items.product address").sort({ createdAt: -1 });
        res.json({ success: true, orders })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

//Get All Orders (for seller / admin) : /api/order/seller
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({
            $or: [{ paymentType: "COD" }, { isPaid: true }]
        }).populate("items.product address");
        res.json({ success: true, orders })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}