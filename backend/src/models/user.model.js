import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username required"],
        unique:[true,"Username already taken"]
    },
    email:{
        type:String,
        required:[true,"Email required"],
        unique:[true,"Email already taken"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    }

})

const userModel = mongoose.model("User",userSchema)

export default userModel