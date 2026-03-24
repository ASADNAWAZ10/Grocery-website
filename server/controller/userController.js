import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


//Register User
export const register  = async (req, res) => {
try {
    const {name, email, password} = req.body

    if(!name || !email || !password){
        return res.json({sucess: false, message: 'Missing Detials'})
    }
    const existingUser = await User.findOne({email})
    if(existingUser)
        return res.json({sucess: false, message: 'User already exists'})

    const hashedPassword = await bcrypt.hash(password, 10)
    
    const user = await User.create({name, email, password:hashedPassword})

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'})
    
    res.cookie('token',token, {
        httpOnly: true, //prevent javascript to access cookie
        secure: process.env.NODE_ENV === 'production', //use secure cookie in production
        samsite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', // CSRF production
        maxAge: 7 * 24 * 60 * 60 * 1000, //cookie expiration time
    })
    return res.json({sucess: true, user: ({email: user.email, name: user.name})})
} catch (error) {
    console.log(error.message);
    res.json({sucess: false, message: error.message})
    
  }
}

//Login User: /api/user/login
export const login = async(req, res) => {
    try{
        const {email, password} = req.body
        if(!email || !password) 
            return res.json({sucess: false, message: "email and password are required"})

            const user = await User.findOne({email});  
            
            if(!user){
                return res.json({sucess:false, message:"email and password are required"})
            }

            const isMatch = await bcrypt.compare(password, user.password)
        
            if(!isMatch)
                return res.json({sucess: false, message: "Invalid email Or Password"})

            res.cookie('token',token, {
                httpOnly: true, 
                secure: process.env.NODE_ENV === 'production', 
                samsite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', 
                maxAge: 7 * 24 * 60 * 60 * 1000, 
            })
            return res.json({sucess: true, user: ({email: user.email, name: user.name})})
        } catch (error) {
            console.log(error.message);
            res.json({sucess: false, message: error.message})
            
          }
        }

        //check Auth: /api/user/is-auth
        export const isAuth = async () => {
            try {
                const {userId} = req.body;
                const user = await User.findbyId(userId).select("-password")
                return res.json({success: true, user})
            } catch (error) {
                console.log(error.message);
                res.json({success:false, message:error.message})
                
            }
        }

        export const logout = async() => {
            try {
                res.clearCookie('token', {
                    httpOnly: true, 
                    secure: process.env.NODE_ENV === 'production', 
                    samsite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', 
                  
                })
                res.json({success: true, message:'Logged Out'})
            } catch (error) {
                console.log(error.message)
                res.json({success: false, message:error.message})
            }
        }