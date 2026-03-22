import mongoose from "mongoose";

const blackListTokenSchema = new mongoose.Schema({
    token:{
        type:String,
        required:[true,"token is required"],

    }
},{timestamps:true})


const blackListTokenModal = mongoose.model("BlackListToken",blackListTokenSchema)

export default blackListTokenModal