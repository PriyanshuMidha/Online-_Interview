import jwt from "jsonwebtoken";
import User from "../models/User.js";
import {ENV}from "../lib/env.js";

export const protectRoute = async (req, res, next) => {
  try {
    console.log("Incoming cookies:", req.cookies);

   const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized - No token provided" });
    }
    console.log("Incoming cookies:", req.cookies);
    console.log("JWT_SECRET_KEY:", ENV.JWT_SECRET_KEY);
    
    const decoded = jwt.verify(token, ENV.JWT_SECRET_KEY);
    

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Unauthorized - User not found" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in protectRoute middleware", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};