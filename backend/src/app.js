import express from 'express'
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'


const app = express()

const corsOptions = {
    origin:"http://localhost:5173",
    credentials:true,
    allowHeaders:["Content-Type","Authorization"],
    methods:["GET","POST","PUT","PATCH","DELETE"]
}

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))

app.use("/api/auth",authRoutes)


export default app