import express from "express";
import { loginController, registerController, logoutController} from "../controller/auth.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js";


const route = express.Router();

// LOGINß
route.post("/login", loginController)

// REGISTER
route.post("/register",registerController)


// LOGOUT
route.post ("/logout" , logoutController)

//onbording route
// route.post("/onboarding", protectRoute ,OnbordingController) 

export default route;
