import jwt from 'jsonwebtoken'
import blackListTokenModal from '../models/blackListToken.model.js'

export const authUser = async(req,res,next)=>{
    try {
        const token = req.cookies.token
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Unauthorized 1"
            })
        }

        const isTokenBlacklisted = await blackListTokenModal.findOne({
            token
        })

        if(isTokenBlacklisted){
            return res.status(401).json({
                success:false,
                message:"Token is invalid"
            })
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        console.log("Middleware error",error)
        return res.status(401).json({
            success:false,
            message:"Unauthorized 2"
        })
    }
}