import express from "express";
import { loginController, registerController, logoutController } from "../controller/auth.controller.js"

const route = express.Router();

// LOGIN
route.post("/login", loginController)

// REGISTER
route.post("/register",registerController)


// LOGOUT
route.post ("/logout" , logoutController)

export default route;
