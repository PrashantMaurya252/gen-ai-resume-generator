import { Router } from "express";
import { registerUserController } from "../controllers/auth.controller.js";


const authRoutes = Router()

authRoutes.post("/register",registerUserController)

export default authRoutes