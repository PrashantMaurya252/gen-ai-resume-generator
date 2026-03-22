import userModel from "../models/user.model.js";
import * as jwt from 'jsonwebtoken'


export const registerUserController = async(req,res)=>{
    try {
        const {username,email,password} = req.body
        if(!username || !email || !password){
            return res.status(400).json({
                success:false,
                message:"Please Provide username,email and password"
            })
        }

        const isUserAlreadyExist = await userModel.findOne({
            $or:[{username},{email}]
        })

        if(isUserAlreadyExist){
            return res.status(400).json({
                success:false,
                message:"User already exist with this email or username"
            })
        }

        const hash = await bcrypt.hash(password,10)

        const user = await userModel.create({
            username,
            email,
            password:hash
        })

        const token = jwt.sign({id:user._id,username:user.username},process.env.JWT_SECRET,{expiresIn:'1d'})

        res.cookie("token",token)

        return res.status(201).json({
            success:true,
            message:"User created successfully"
        })
    } catch (error) {
        console.error("register user controller error",error)
        return res.status(500).json({
            success:false,
            message:"Something wen wrong while user registration"
        })
    }
}

export const loginUserController = async(req,res)=>{
    try {
        const {email,password} = req.body
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Email and Passord are required"
            })
        }

        const user = await userModel.findOne({email})
        if(!user){
            return res.status({
                success:false,
                message:"User does not exist with this email"
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password,user.password)
        if(!isPasswordCorrect){
            return res.status(400).json({
                success:400,
                message:"Invalid Email or Password"
            })
        }

        const {password:hashedPassword,...userData} = user

        const token = jwt.sign({id:user._id,username:user.username},process.env.JWT_SECRET,{expiresIn:"1d"})
        res.cookie("token",token)
        return res.status(200).json({
            success:true,
            message:"User Loggedin Successfully",
            data:userData
        })
    } catch (error) {
        console.log("Login User controller error",error)
        return res.status(500).json({
            success:false,
            message:"Login User Controller error",error
        })
    }
}