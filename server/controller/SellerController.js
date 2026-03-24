import User from "../models/User.js";

//login seller: /api/seller/login
export const sellerLogin = async (req, res) => {
    const {email, password} = req.body;

   try {
    if(email === process.env.SELLER_EMAIL && password === process.env.SELLER_PASSWORD){
        const token = jwt.sign({email},process.env.JWT_SECRET, {expireIn: '7d'})
       
        res.cookie('sellerToken',sellerToken, {
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production', 
            samsite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', 
            maxAge: 7 * 24 * 60 * 60 * 1000, 
        })
        return res.json({sucess: true, message: "Logged In" })
    } else{
        return res.json({sucess: false, message: "Invalid Credentails" })
    }
   } catch (error) {
    console.log(error.message)
    return res.json({sucess: false, message: error.message })
   }
 }

 //seller Auth : /api/seller/is-auth
 export const isSellerAuth = async(req,res) => {
    try {
        const {userId} = req.body
        const user = await User.findbyId(userId).select("-password")
        return res.json({success:true, user})
    } catch (error) {
        console.log(error.message)
        return res.json({sucess: false, message: error.message })
    }
 }
  
 //Logout seller: /api/seller/logout
 export const Sellerlogout = async (req, res) => {
    try {
        res.clearCookie('token',{
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production', 
            samsite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',         
        })
        res.json({success:true, message:"Logged Out"})
    } catch (error) {
        console.log(error.message)
        return res.json({sucess: false, message: error.message })
    }
 }