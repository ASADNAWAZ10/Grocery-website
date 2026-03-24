import User from "../models/User.js";

//update User CartData : /api/cart/update

export const updateCart = async () => {
    try {
        const { userId, cartItem } = req.body
        await User.findByIdAndUpdate(userId, { cartItem })
        res.json({ success: true, message: "cart Updated" })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}