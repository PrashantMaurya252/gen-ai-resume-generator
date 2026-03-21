import mongoose from "mongoose";
import config from "../config/config.js";


const connectToDB = async()=>{
    try {
        mongoose.connect(config.MONGO_URI)
        console.log("Database connected successfully")
    } catch (error) {
        console.log("MongoDB Error")
    }
}

export default connectToDB