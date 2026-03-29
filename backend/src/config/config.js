import dotenv from 'dotenv'
dotenv.config()

if(!process.env.MONGO_URI){
    throw new Error("MONGO_URI is not defined in env file")
}

const GEMENI_API_KEY = process.env.GOOGLE_GENAI_API_KEY
if(!GEMENI_API_KEY){
    throw new Error("GEMENI_API_KEY not defined in env file")
}


const config = {
    MONGO_URI : process.env.MONGO_URI,
    GEMENI_API_KEY
}




export default config