import { Router } from "express";
import { loginUserController, logoutUserController, registerUserController } from "../controllers/auth.controller.js";


const authRoutes = Router()

authRoutes.post("/register",registerUserController)
authRoutes.post("/login",loginUserController)
authRoutes.get("/logout",logoutUserController)

export default authRoutes