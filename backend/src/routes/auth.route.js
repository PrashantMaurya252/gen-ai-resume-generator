import { Router } from "express";
import { getMeController, loginUserController, logoutUserController, registerUserController } from "../controllers/auth.controller.js";
import { authUser } from "../middlewares/auth.js";


const authRoutes = Router()

authRoutes.post("/register",registerUserController)
authRoutes.post("/login",loginUserController)
authRoutes.get("/logout",logoutUserController)
authRoutes.get("/get-me",authUser,getMeController)

export default authRoutes