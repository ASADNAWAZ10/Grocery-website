import Order from "../models/order.js"
import Product from "../models/product.js"
// import paypal from '@paypal/checkout-server-sdk'


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

//Place Order PayPal : /api/order/paypal
// export const placeOrderPayPal = async (req, res) => {
//     try {
//         const { userId, items, address } = req.body
//         const {origin} = req.headers;

//         if (!address || items.length === 0) {
//             return res.json({ success: false, message: "Invalid data" })
//         }

//          let productData = []

//         //Calculate Amount Using Items
//             let amount = await items.reduce(async (acc, item) => {
//             const product = await Product.findById(item.product);
//             productData.push({
//                 name: product.name,
//                 price: product.offerPrice,
//                 quantity: item.quantity,
//             });
//             return (await acc) + product.offerPrice * item.quantity;
//         }, 0)

//           //Add Tax Change (2%)
//           amount += Math.round(amount * 0.02);

//          const order = await Order.create({
//               userId,
//               items,
//               amount,
//               address,
//               paymentType: "online",
//           });

//           const environment = new paypal.core.SandboxEnvironment(
//             process.env.PAPAL__CLIENT_ID,
//             process.env.PAYPAL_CLIENT_SECRET
//           );
//           const paypalClient = new paypal.core.PayPalHttpClient(environment);

//           const requestBody = {
//             intent: "CAPTURE",
//            purchase_units: [
//             {
//                 items: productData.map((item) => 
//                 ({
//                     name: item.name,
//                     unit_amount: {
//                         currency_code: "USD",
//                         value: item.price.toString(),
//                     },quantity: item.quantity.toString(),
//                 })),
//                 amount: {
//                     currency_code: "USD",
//                     value: productData.reduce((total, item) => total + item.price * 
//                     item.quantity,0).toString(),
                    
//                 }
//             }
//            ]
//           }
//           res.json({ success: true, message: "Order Placed Successfully",amount })
//     }catch(error){
//         console.log(error);
//         res.status(500).json({success:false, message:"Server Error"})
        
//     }
// }


// const createPayPalOrder = async ({origin, itemlines, order})  => {
//         const request = new paypal.orders.OrdersCreateRequest();

//         const total = itemlines.reduce((sum, item) => sum + item.price * item.quantity,0);

//         request.requestBody({
//         intent: "CAPTURE",
//         application_context: {
//             return_url : `${origin}/loader?next=my-orders`,
//             cancal_url : `${origin}/cart`
//         },
//         purchase_units: [
//             {
//                 items: itemlines.map((item)=> ({
//                     name: item.name,
//                     unit_amount: {
//                         currency_code: "USD",
//                         value: item.quantity.toString()
//                     },
//                     quantity: item.quantity.toString(),
//                 })),
//                 amount: {
//                     currency_code: "USD",
//                     value: total.toString(),
//                     breakdown: {
//                         item_total: {currency_code:"USD",value: total.toString()},
//                     }
//                 },
//                 custom_id: order._id.toString(),
//             }
//         ]
//         })

//         const orderResponse = await paypalClient.execute(request);
//         return orderResponse.result.id;
//     }
//     export const paypal = async (request, response) => {
//      const paypalInstance = new paypal(process.env.paypal_secret_key);

//      const sig = request.headers["paypal-signature"];
//      let event;

//      try {
//         event = paypalInstance.webhooks.constructEvent(
//             request.body,
//             sig,
//             process.env.paypal_WEBHOOK_SECRET
//         )
//      } catch (error) {
//         response.status(400).send(`webhook error: ${error.message}`)
//      }

//      switch (event.type){
//         case "payment_intent.succeeded":{
            
//         }
//          break;

//          default:
//          break;
//      }
//     } 

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